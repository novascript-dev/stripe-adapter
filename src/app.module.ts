import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { StripeModule } from './stripe/stripe.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { LoggingMiddleware } from './middleware/logging.middleware';
import { HealthController } from './health/health.controller';

@Module({
  imports: [StripeModule],
  controllers: [HealthController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes('stripe'); // Ou rotas específicas do Stripe
  }
}