import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticStandardModule } from './static-standard/static-standard.module';
import { UseclassModule } from './static-custom/useclass/useclass.module';
import { UseValueModule } from './static-custom/usevalue/usevalue.module';
import { UseFactoryModule } from './static-custom/usefactory/usefactory.module';
import { UseExistingModule } from './static-custom/useexisting/use-existing.module';
import { BaseBModule } from './dynamic/register/baseB/baseB.module';
import { BaseAModule } from './dynamic/register/baseA/baseA.module';
import { BaseCModule } from './dynamic/forroot/baseC/baseC.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    StaticStandardModule,
    UseclassModule,
    UseValueModule,
    UseFactoryModule,
    UseExistingModule,
    BaseBModule,
    BaseAModule,
    /*
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'baseC',
      autoLoadEntities: true,
      synchronize: false,
    }),
    */
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'baseC',
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    BaseCModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
