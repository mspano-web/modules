import { Injectable } from '@nestjs/common';

@Injectable()
export class UseclassService {
  findUseClassApply(): string {
    console.log('UseclassService - findUseClassApply');
    return 'UseclassService - findUseClassApply';
  }
}
