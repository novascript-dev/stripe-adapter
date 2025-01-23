import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    }),
    new winston.transports.File({ 
      filename: 'logs/stripe-requests.log',
      maxsize: 5242880,
      maxFiles: 5
    })
  ]
});

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private readonly nestLogger = new Logger(LoggingMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    const originalSend = res.send;
    let responseBody;

    res.send = function(body) {
      responseBody = body;
      return originalSend.call(this, body);
    };

    res.on('finish', () => {
      const duration = Date.now() - startTime;

      logger.info(JSON.stringify({
        method: req.method,
        path: req.path,
        requestBody: req.body,
        statusCode: res.statusCode,
        responseBody: responseBody ? JSON.parse(responseBody) : null,
        duration: `${duration}ms`
      }));

      this.nestLogger.log(`${req.method} ${req.path} - ${res.statusCode} - ${duration}ms`);
    });

    next();
  }
}