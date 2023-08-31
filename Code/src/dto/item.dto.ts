import { PriceDto } from './price.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  gtin: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  sku: string;

  @ApiProperty()
  brand: string;

  @ApiProperty({ type: PriceDto })
  price: PriceDto;
}
