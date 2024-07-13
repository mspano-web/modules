import { Module } from '@nestjs/common';
import { useValueObject } from './usevalue.service';
import { useValueController } from './usevalue.controller';

@Module({
  providers: [
    {
      provide: 'USE_VALUE_KEY',
      useValue: useValueObject,
    },
  ],
  controllers: [useValueController],
})
export class UseValueModule {}
