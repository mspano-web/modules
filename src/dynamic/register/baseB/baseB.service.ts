import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollectioBDocument, CollectionB } from './baseB.schema';

@Injectable()
export class BaseBService {
  constructor(
    @InjectModel('BaseB', 'baseBdb')
    private readonly collectionBModel: Model<CollectioBDocument>,
  ) {}

  async findAll(): Promise<CollectioBDocument[]> {
    return await this.collectionBModel.find().exec();
  }

  async create(createDto: CollectionB): Promise<CollectioBDocument> {
    const createdDocument = new this.collectionBModel(createDto);
    return await createdDocument.save();
  }
}
