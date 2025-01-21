import { Module } from '@nestjs/common';
import { StripeModule } from './stripe/stripe.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

@Module({
  imports: [StripeModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
