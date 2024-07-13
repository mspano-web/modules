import { Controller, Get, Inject } from '@nestjs/common';

@Controller('http-useexisting')
export class HttpUseExistingController {
  constructor(
    @Inject('HttpUseExistingService') private readonly useExistingService,
  ) {}

  @Get()
  logHttpMessage(): string {
    this.useExistingService.log('HTTP log message');
    return 'HttpUseExistingController - logHttpMessage';
  }
}
