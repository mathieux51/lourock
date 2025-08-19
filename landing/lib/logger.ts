import pino from 'pino';

const isProduction = process.env.NODE_ENV === 'production';

export const logger = pino({
  level: isProduction ? 'info' : 'debug',
  transport: isProduction ? undefined : {
    target: 'pino-pretty',
    options: {
      colorize: true,
      ignore: 'pid,hostname',
      translateTime: 'HH:MM:ss',
      singleLine: false
    }
  },
  base: {
    env: process.env.NODE_ENV
  },
  redact: {
    paths: ['email', 'req.headers.authorization'],
    censor: '***'
  }
});

export default logger;