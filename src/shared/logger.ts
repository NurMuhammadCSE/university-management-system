// /* eslint-disable no-undef */
// import winston from 'winston';
// import path from 'path';
// const { combine, timestamp, label, printf, prettyPrint } = winston.format;
// import DailyRotateFile from 'winston-daily-rotate-file';

// const myFormat = printf(({ level, message, label, timestamp }) => {

//   const date = new Date(timestamp)
//   const hour = date.getHours()
//   const minutes = date.getMinutes()
//   const seconds = date.getSeconds()

//   return `${date.toDateString()} ${hour}: ${minutes}: ${seconds} } [${label}] ${level}: ${message}`;
// });

// const logger = winston.createLogger({
//   level: 'info',
//   format: combine(
//     label({ label: 'NM' }),
//     timestamp(),
//     myFormat,
//     prettyPrint()
//   ),
//   transports: [
//     new winston.transports.Console(),

//     new DailyRotateFile({
//       filename: path.join(process.cwd(), 'logs', 'winston', 'success', 'ums-%DATE%-success.log'), level: 'error',
//       datePattern: 'YYYY-MM-DD-HH',
//       zippedArchive: true,
//       maxSize: '20m',
//       maxFiles: '14d'
//     })
//   ],
// });

// const errorLogger = winston.createLogger({
//   level: 'error',
//   format: combine(
//     label({ label: 'NM' }),
//     timestamp(),
//     myFormat,
//     prettyPrint()
//   ), transports: [
//     new winston.transports.Console(),
//     new DailyRotateFile({
//         filename: path.join(process.cwd(), 'logs', 'winston', 'errors', 'ums-%DATE%-error.log'), level: 'error',
//         datePattern: 'YYYY-MM-DD-HH',
//         zippedArchive: true,
//         maxSize: '20m',
//         maxFiles: '14d'
//       })
//   ],
// });

// export { logger, errorLogger };

/* eslint-disable no-undef */
import path from 'path'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
const { combine, timestamp, label, printf } = format

//Custom Log Format

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${date.toDateString()} ${hour}:${minutes}:${seconds} } [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'UMS-%DATE%-success.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'UMS-%DATE%-error.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export { logger, errorLogger }
