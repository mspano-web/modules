import { Module } from '@nestjs/common';
import { UseclassController } from './useclass.controller';
//import { UseclassService } from './useclass.service';
import { AlternativeUseclassService } from './alternativeuseclass.service';

@Module({
  controllers: [UseclassController],
  providers: [
    {
      provide: 'USECLASSAPPLY',
      useClass: AlternativeUseclassService,
      //useClass: UseclassService,
    },
  ],
  exports: ['USECLASSAPPLY'],
})
export class UseclassModule {}
