export const STRIPE_CONFIG = {
  apiKey: process.env.STRIPE_SECRET_KEY,
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  typescript: true,
};