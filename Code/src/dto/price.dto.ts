import { ApiProperty } from '@nestjs/swagger';

export class PriceDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  amount: string;

  @ApiProperty()
  currency: string;
}
