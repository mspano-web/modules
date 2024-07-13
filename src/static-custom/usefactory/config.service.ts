import { Injectable } from '@nestjs/common';
import { ConfigServiceInterface } from './config-service.interface';

@Injectable()
export class ConfigService implements ConfigServiceInterface {
  getDatabaseUrl(): string {
    return 'mongodb://localhost:27017/mydatabase';
  }
}
