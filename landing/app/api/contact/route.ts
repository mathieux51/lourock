import { NextResponse } from 'next/server';
import * as net from 'net';
import * as tls from 'tls';
import * as dns from 'dns/promises';
import logger from '@/lib/logger';

async function getMXRecord(domain: string): Promise<string> {
  const log = logger.child({ function: 'getMXRecord', domain });
  
  try {
    log.debug('Looking up MX records');
    const records = await dns.resolveMx(domain);
    
    if (records && records.length > 0) {
      records.sort((a, b) => a.priority - b.priority);
      const mxHost = records[0].exchange;
      log.info({ mxHost, priority: records[0].priority }, 'MX record found');
      return mxHost;
    }
    
    log.warn('No MX records found');
  } catch (error) {
    log.error({ error }, 'Failed to lookup MX records');
  }
  return '';
}

async function sendSMTPEmail(
  to: string,
  from: string, 
  subject: string,
  body: string
): Promise<boolean> {
  const log = logger.child({ 
    function: 'sendSMTPEmail',
    to: to.replace(/(.{3}).*@/, '$1***@'), // Partially redact email
    from 
  });
  
  const toDomain = to.split('@')[1];
  log.debug({ domain: toDomain }, 'Extracting domain from email');
  
  const mxHost = await getMXRecord(toDomain);
  
  if (!mxHost) {
    log.error('No MX host found, cannot send email');
    return false;
  }

  return new Promise((resolve) => {
    const port = 25;
    log.info({ mxHost, port }, 'Connecting to SMTP server');
    
    const client = net.createConnection(port, mxHost);
    
    let step = 0;
    const commands = [
      `HELO lourock.com`,
      `MAIL FROM:<${from}>`,
      `RCPT TO:<${to}>`,
      `DATA`,
      `From: ${from}\r\nTo: ${to}\r\nSubject: ${subject}\r\n\r\n${body}\r\n.`,
      `QUIT`
    ];

    client.on('connect', () => {
      log.debug('Connected to SMTP server');
      step = 0;
    });

    client.on('data', (data) => {
      const response = data.toString().trim();
      log.debug({ step, response }, 'SMTP response received');
      
      if (response.startsWith('220') || response.startsWith('250') || response.startsWith('354')) {
        if (step < commands.length) {
          const cmd = step === 4 ? 'DATA content' : commands[step]; // Don't log full email body
          log.debug({ step, command: cmd }, 'Sending SMTP command');
          client.write(commands[step] + '\r\n');
          step++;
        }
        if (step === commands.length) {
          log.info('Email sent successfully');
          client.end();
          resolve(true);
        }
      } else {
        log.error({ response }, 'SMTP error response');
        client.end();
        resolve(false);
      }
    });

    client.on('error', (error) => {
      log.error({ error }, 'SMTP connection error');
      resolve(false);
    });

    client.setTimeout(5000, () => {
      log.error('SMTP connection timeout');
      client.destroy();
      resolve(false);
    });
  });
}

export async function POST(request: Request) {
  const log = logger.child({ endpoint: '/api/contact' });
  
  try {
    const { name, email, band, message } = await request.json();
    
    log.info({ 
      name, 
      email: email.replace(/(.{3}).*@/, '$1***@'),
      band,
      hasMessage: !!message 
    }, 'Contact form submission received');

    if (!name || !email || !message) {
      log.warn('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Band: ${band || 'Not specified'}

Message:
${message}
`;

    log.debug('Attempting to send email');
    const sent = await sendSMTPEmail(
      'contact@lourock.com',
      'noreply@lourock.com',
      `New booking request from ${name}`,
      emailBody
    );

    if (sent) {
      log.info('Contact form email sent successfully');
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } else {
      log.error('Failed to send contact form email');
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    log.error({ error }, 'Unexpected error in contact form handler');
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}