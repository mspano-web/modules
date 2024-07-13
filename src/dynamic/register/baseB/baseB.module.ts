import { Module } from '@nestjs/common';
import { RegisterModule } from '../register.module';
import { BaseBService } from './baseB.service';
import { BaseBController } from './baseB.controller';
import { CollectionBSchema } from './baseB.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RegisterModule.register('mongodb://localhost/baseBdb', 'baseBdb'),

    MongooseModule.forFeature(
      [{ name: 'BaseB', schema: CollectionBSchema }],
      'baseBdb',
    ),
  ],
  controllers: [BaseBController],
  providers: [BaseBService],
})
export class BaseBModule {}
