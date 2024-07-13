import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { UseFactoryService } from './usefactory.service';
import { UseFactoryController } from './usefactory.controller';

@Module({
  controllers: [UseFactoryController],
  providers: [
    ConfigService,
    {
      provide: UseFactoryService,
      useFactory: (configService: ConfigService) => {
        const databaseUrl = configService.getDatabaseUrl();
        console.log('databaseUrl:', databaseUrl);
        return new UseFactoryService(databaseUrl);
      },
      inject: [ConfigService],
    },
  ],
  exports: [UseFactoryService],
})
export class UseFactoryModule {}
