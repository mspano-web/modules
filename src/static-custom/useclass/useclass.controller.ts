import { Controller, Get, Inject } from '@nestjs/common';

@Controller('useclass')
export class UseclassController {
  constructor(@Inject('USECLASSAPPLY') private readonly useclassService: any) {}

  @Get()
  findUseClassApply(): string {
    return this.useclassService.findUseClassApply();
  }
}
