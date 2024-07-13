// src/dynamic/forroot/baseC/baseC.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseCService } from './baseC.service';
import { BaseCController } from './baseC.controller';
import { TablaC } from './tablaC.entity';

@Module({
  // we use forFeature to register the TableC entity.
  // This allows BaseCService to use the TablaC repository without needing to configure the database connection,
  //   as that is handled globally in AppModule with forRoot.
  // The TableC entity is registered in the BaseC module.
  //    The NestJS IoC container creates a repository for the TableC entity.
  //    This repository can be injected into the BasecService service using the @InjectRepository(TableC) decorator.
  imports: [TypeOrmModule.forFeature([TablaC])],
  providers: [BaseCService],
  controllers: [BaseCController],
})
export class BaseCModule {}
