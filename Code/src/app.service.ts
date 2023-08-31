import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './models/item.entity';
import { ItemDto } from './dto/item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './models/order.entity';
import { OrderDetail } from './models/orderDetail.enity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
  ) {}

  async getAllItems(): Promise<ItemDto[]> {
    const items = await this.itemRepository.find({ relations: ['price'] });
    return items.map((item) => this.mapItemToDto(item));
  }

  async getItemById(id: number): Promise<ItemDto> {
    const item = await this.itemRepository.findOne({
      where: { id }, // Specify the search criteria
      relations: ['price'], // Specify relations
    });

    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return this.mapItemToDto(item);
  }

  async getItemsByCategory(category: string): Promise<ItemDto[]> {
    const items = await this.itemRepository.find({
      where: { category },
      relations: ['price'],
    });
    return items.map((item) => this.mapItemToDto(item));
  }

  async createOrder(orderItems: ItemDto[]): Promise<void> {
    console.log('Inside createOrder method');

    // Create an array to store the orders and order details
    const orders: Order[] = [];

    // Iterate through each order item
    for (const itemDto of orderItems) {
      console.log('Processing order item:', itemDto);

      // Create a new Order
      const order = new Order();
      order.currency = itemDto.price.currency;
      console.log('Created order:', order);
      orders.push(order);

      // Create a new OrderDetail
      const orderDetail = new OrderDetail();
      orderDetail.item = this.mapDtoToEntity(itemDto);
      orderDetail.order = [order]; // Link the OrderDetail to the Order array
      console.log('Created order detail:', orderDetail);
      order.orderDetails = [orderDetail]; // Link the Order to the OrderDetail array

      // Save the OrderDetail to the local database
      await this.orderDetailRepository.save(orderDetail);
      console.log('Saved order detail:', orderDetail);
    }

    // Save all the orders to the local database
    await this.orderRepository.save(orders);
    console.log('Saved orders:', orders);
  }

  private mapItemToDto(item: Item): ItemDto {
    return {
      id: item.id,
      gtin: item.gtin,
      name: item.name,
      category: item.category,
      sku: item.sku,
      brand: item.brand,
      price: item.price,
    };
  }

  private mapDtoToEntity(itemDto: ItemDto): Item {
    const item = new Item();
    item.gtin = itemDto.gtin;
    item.name = itemDto.name;
    item.category = itemDto.category;
    item.sku = itemDto.sku;
    item.brand = itemDto.brand;
    item.price = itemDto.price;
    return item;
  }
}
