import { Controller, Get, Post, Body } from '@nestjs/common';
import { BaseCService } from './baseC.service';
import { TablaC } from './tablaC.entity';

@Controller('baseC')
export class BaseCController {
  constructor(private readonly baseCService: BaseCService) {}

  @Get()
  async findAll(): Promise<TablaC[]> {
    console.log('Dynamic forRoot baseC GET');
    return this.baseCService.findAll();
  }

  @Post()
  async create(@Body() data: Partial<TablaC>): Promise<TablaC> {
    console.log('Dynamic forRoot baseC POST');
    return this.baseCService.create(data);
  }
}
