import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ItemDto } from './dto/item.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/createOrder.dto';

@ApiTags('API')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/items')
  @ApiOperation({ summary: 'Get all items' })
  async getAllItems(): Promise<ItemDto[]> {
    const items = await this.appService.getAllItems();
    return items;
  }

  @Get('/items/:id')
  @ApiOperation({ summary: 'Get a specific item by ID' })
  @ApiParam({ name: 'id', description: 'Item ID', type: Number })
  async getItemById(@Param('id') id: number): Promise<ItemDto> {
    const item = await this.appService.getItemById(id);
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }

  @Get('/items/category/:category')
  @ApiOperation({ summary: 'Get items by category' })
  @ApiParam({ name: 'category', description: 'Item category' })
  async getItemsByCategory(
    @Param('category') category: string,
  ): Promise<ItemDto[]> {
    const items = await this.appService.getItemsByCategory(category);
    return items;
  }

  @Post('/v2/orders')
  @ApiOperation({ summary: 'Create an order' })
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<void> {
    // Pass the array of order items to the service
    await this.appService.createOrder(createOrderDto.items);
  }
}
