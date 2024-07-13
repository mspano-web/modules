import { Module } from '@nestjs/common';
import { RegisterModule } from '../register.module';
import { BaseAService } from './baseA.service';
import { BaseAController } from './baseA.controller';
import { CollectionASchema } from './baseA.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RegisterModule.register('mongodb://localhost/baseAdb', 'baseAdb'),
    //RegisterModule.registerAsync('mongodb://localhost/baseAdb', 'baseAdb'),

    // We use forFeature to register the CollectionASchema schema in the context of the baseAdb connection.
    // This allows BaseAService to use the BaseA model without needing to configure the database connection,
    //  as that is handled by RegisterModule.register.
    // The NestJS IoC container creates a BaseA provider for the model based on the provided schema.

    MongooseModule.forFeature(
      [{ name: 'BaseA', schema: CollectionASchema }],
      'baseAdb',
    ),
  ],
  controllers: [BaseAController],
  providers: [BaseAService],
})
export class BaseAModule {}
