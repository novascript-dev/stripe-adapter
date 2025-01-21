import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateCustomerDto } from './dto/create-costumer.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('create-customer')
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    const { email, name } = createCustomerDto;
    const customer = await this.stripeService.createCustomer(email, name);
    return customer;
  }

  @Post('create-payment')
  async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    const { amount, currency } = createPaymentDto;
    const paymentIntent = await this.stripeService.createPaymentIntent(amount, currency);
    return paymentIntent;
  }

  @Post('confirm-payment')
  async confirmPayment(@Body() confirmPaymentDto: ConfirmPaymentDto) {
    const { paymentIntentId } = confirmPaymentDto;
    const paymentIntent = await this.stripeService.confirmPaymentIntent(
      paymentIntentId,
    );
    return paymentIntent;
  }
}
