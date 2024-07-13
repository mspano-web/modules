import { Injectable } from '@nestjs/common';

@Injectable()
export class UseExistingService {
  log(message: string): void {
    console.log(`UseExistingService - log: ${message}`);
  }
}
