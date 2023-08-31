import { ApiProperty } from '@nestjs/swagger';
import { ItemDto } from './item.dto';

export class CreateOrderDto {
  @ApiProperty({ type: [ItemDto] })
  items: ItemDto[];
}