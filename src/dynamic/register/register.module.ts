import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
export class RegisterModule {
  static register(uri: string, connectionName: string): DynamicModule {
    return {
      module: RegisterModule,
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => ({
            uri,
          }),
          connectionName,
        }),
      ],
      exports: [MongooseModule],
    };
  }
}
