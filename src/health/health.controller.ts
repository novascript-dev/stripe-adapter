import { Controller, Get } from "@nestjs/common";

@Controller('health')
export class HealthController {
  @Get()
  healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      services: {
        stripe: true
        // You could add here validations like external services
      }
    };
  }
}