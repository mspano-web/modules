import * as mongoose from 'mongoose';

export const CollectionASchema = new mongoose.Schema(
  {
    fieldA: { type: String, required: true },
    fieldB: { type: String, required: true },
  },
  { collection: 'collectionA' },
);

export interface CollectionA {
  fieldA: string;
  fieldB: string;
}

export type CollectionADocument = mongoose.Document & CollectionA;
