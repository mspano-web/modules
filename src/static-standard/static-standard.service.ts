import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticStandardService {
  findAll(): string {
    console.log('Static Standard Service - findAll');
    return 'Static Standard Service - findAll';
  }
}
