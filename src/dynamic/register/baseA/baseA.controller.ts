import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseAService } from './baseA.service';
import { CollectionA } from './baseA.schema';

@Controller('baseA')
export class BaseAController {
  constructor(private readonly baseAService: BaseAService) {}

  @Get()
  async findAll() {
    console.log('Dynamic register baseA GET');
    return await this.baseAService.findAll();
  }

  @Post()
  async create(@Body() createDto: CollectionA) {
    console.log('Dynamic register baseA POST');
    return await this.baseAService.create(createDto);
  }
}
