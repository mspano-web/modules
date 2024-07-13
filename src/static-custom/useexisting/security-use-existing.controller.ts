import { Controller, Get, Inject } from '@nestjs/common';

@Controller('security-useexisting')
export class SecurityUseExistingController {
  constructor(
    @Inject('SecurityUseExistingService') private readonly useExistingService,
  ) {}

  @Get()
  logSecurityMessage(): string {
    this.useExistingService.log('Security log message');
    return 'SecurityUseExistingController - logSecurityMessage ';
  }
}
