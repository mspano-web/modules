import { Controller, Get } from '@nestjs/common';
import { StaticStandardService } from './static-standard.service';

@Controller('static-standard')
export class StaticStandardController {
  constructor(private readonly staticStandardService: StaticStandardService) {}

  @Get()
  findAll(): string {
    return this.staticStandardService.findAll();
  }
}
