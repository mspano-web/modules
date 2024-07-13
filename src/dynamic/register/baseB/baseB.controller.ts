import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseBService } from './baseB.service';
import { CollectionB } from './baseB.schema';

@Controller('baseB')
export class BaseBController {
  constructor(private readonly baseBService: BaseBService) {}

  @Get()
  async findAll() {
    console.log('Dynamic register baseB GET');
    return await this.baseBService.findAll();
  }

  @Post()
  async create(@Body() createDto: CollectionB) {
    console.log('Dynamic register baseB POST');
    return await this.baseBService.create(createDto);
  }
}
