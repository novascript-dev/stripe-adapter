import { Injectable, Logger } from '@nestjs/common';
import Stripe from 'stripe';
import { STRIPE_CONFIG } from './stripe.config';

@Injectable()
export class StripeService {
  private stripe: Stripe;
  private readonly logger = new Logger(StripeService.name);

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }

  async createCustomer(email: string, name: string) {
    try {
      const customer = await this.stripe.customers.create({
        email,
        name,
      });
      return customer;
    } catch (error) {
      throw new Error(`Error creating customer: ${error.message}`);
    }
  }

  async createPaymentIntent(amount: number, currency: string = 'brl') {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency,
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return paymentIntent;
    } catch (error) {
      throw new Error(`Error creating PaymentIntent: ${error.message}`);
    }
  }

  async confirmPaymentIntent(paymentIntentId: string) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.confirm(paymentIntentId, {
        payment_method: 'pm_card_visa',
        return_url: 'https://google.com'
      });
      return paymentIntent;
    } catch (error) {
      throw new Error(`Error conffirming PaymentIntent: ${error.message}`);
    }
  }
}
