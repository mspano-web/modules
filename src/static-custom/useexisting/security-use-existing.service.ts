import { Injectable } from '@nestjs/common';

@Injectable()
export class SecurityUseExistingService {
  log(message: string): void {
    console.log(`SecurityUseExistingService: ${message}`);
  }
}
