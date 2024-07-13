import { Injectable } from '@nestjs/common';

@Injectable()
export class AlternativeUseclassService {
  findUseClassApply(): string {
    console.log('AlternativeUseclassService  - findUseClassApply');
    return 'AlternativeUseclassService  - findUseClassApply';
  }
}
