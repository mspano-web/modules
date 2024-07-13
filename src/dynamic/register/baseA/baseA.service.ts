import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollectionADocument, CollectionA } from './baseA.schema';

@Injectable()
export class BaseAService {
  constructor(
    @InjectModel('BaseA', 'baseAdb')
    private readonly collectionAModel: Model<CollectionADocument>,
  ) {}

  async findAll(): Promise<CollectionADocument[]> {
    return await this.collectionAModel.find().exec();
  }

  async create(createDto: CollectionA): Promise<CollectionADocument> {
    const createdDocument = new this.collectionAModel(createDto);
    return await createdDocument.save();
  }
}
