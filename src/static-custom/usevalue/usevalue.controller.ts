// controllers/api-config.controller.ts
import { Controller, Get, Inject } from '@nestjs/common';

@Controller('usevalue')
export class useValueController {
  constructor(
    @Inject('USE_VALUE_KEY')
    private readonly useValueObject: { key: string },
  ) {}

  @Get()
  get(): string {
    const keyConfig = this.useValueObject.key;
    console.log('usevalue - keyConfig:', keyConfig);
    return keyConfig;
  }
}
