import { Module } from '@nestjs/common';
import { StaticStandardController } from './static-standard.controller';
import { StaticStandardService } from './static-standard.service';

@Module({
  controllers: [StaticStandardController],
  providers: [StaticStandardService],
})
export class StaticStandardModule {}
