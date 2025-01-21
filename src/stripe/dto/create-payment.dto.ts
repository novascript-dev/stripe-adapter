import { IsNumber, IsNumberString, IsString, IsPositive } from 'class-validator';

export class CreatePaymentDto {
  amount: number;

  @IsString()
  currency: string = 'brl'; // Moeda padrão (pode ser alterada)
}
