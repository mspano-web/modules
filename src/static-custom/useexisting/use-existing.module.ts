import { Module } from '@nestjs/common';
import { UseExistingService } from './use-existing.service';
import { HttpUseExistingController } from './http-use-existing.controller';
import { SecurityUseExistingController } from './security-use-existing.controller';
import { SecurityUseExistingService } from './security-use-existing.service';
import { HttpUseExistingService } from './http-use-existing.service';

@Module({
  controllers: [HttpUseExistingController, SecurityUseExistingController],
  providers: [
    UseExistingService,
    {
      provide: 'HttpUseExistingService',
      //useExisting: UseExistingService,
      useClass: HttpUseExistingService,
    },
    {
      provide: 'SecurityUseExistingService',
      //useExisting: UseExistingService,
      useClass: SecurityUseExistingService,
    },
  ],
  exports: [
    UseExistingService,
    'HttpUseExistingService',
    'SecurityUseExistingService',
  ],
})
export class UseExistingModule {}
