import { NextResponse } from 'next/server';
import * as net from 'net';
import * as tls from 'tls';
import * as dns from 'dns/promises';

async function getMXRecord(domain: string): Promise<string> {
  try {
    const records = await dns.resolveMx(domain);
    if (records && records.length > 0) {
      records.sort((a, b) => a.priority - b.priority);
      return records[0].exchange;
    }
  } catch {}
  return '';
}

async function sendSMTPEmail(
  to: string,
  from: string, 
  subject: string,
  body: string
): Promise<boolean> {
  const toDomain = to.split('@')[1];
  const mxHost = await getMXRecord(toDomain);
  
  if (!mxHost) return false;

  return new Promise((resolve) => {
    const port = 25;
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
      step = 0;
    });

    client.on('data', (data) => {
      const response = data.toString();
      
      if (response.startsWith('220') || response.startsWith('250') || response.startsWith('354')) {
        if (step < commands.length) {
          client.write(commands[step] + '\r\n');
          step++;
        }
        if (step === commands.length) {
          client.end();
          resolve(true);
        }
      } else {
        client.end();
        resolve(false);
      }
    });

    client.on('error', () => {
      resolve(false);
    });

    client.setTimeout(5000, () => {
      client.destroy();
      resolve(false);
    });
  });
}

export async function POST(request: Request) {
  try {
    const { name, email, band, message } = await request.json();

    if (!name || !email || !message) {
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

    const sent = await sendSMTPEmail(
      'contact@lourock.com',
      'noreply@lourock.com',
      `New booking request from ${name}`,
      emailBody
    );

    if (sent) {
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}