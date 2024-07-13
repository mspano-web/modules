import { Controller, Get } from '@nestjs/common';
import { UseFactoryService } from './usefactory.service';

@Controller('usefactory')
export class UseFactoryController {
  constructor(private readonly useFactoryService: UseFactoryService) {}

  @Get()
  connect(): string {
    this.useFactoryService.connect();
    return 'useFactory connected';
  }
}
