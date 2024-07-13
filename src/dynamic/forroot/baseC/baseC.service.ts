import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TablaC } from './tablaC.entity';

@Injectable()
export class BaseCService {
  constructor(
    @InjectRepository(TablaC)
    private readonly tablaCRepository: Repository<TablaC>,
  ) {}

  findAll(): Promise<TablaC[]> {
    return this.tablaCRepository.find();
  }

  create(data: Partial<TablaC>): Promise<TablaC> {
    const newRecord = this.tablaCRepository.create(data);
    return this.tablaCRepository.save(newRecord);
  }
}
