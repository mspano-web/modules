import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpUseExistingService {
  log(message: string): void {
    console.log(`HttpUseExistingService: ${message}`);
  }
}
