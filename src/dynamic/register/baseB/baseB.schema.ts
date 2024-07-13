import * as mongoose from 'mongoose';

export const CollectionBSchema = new mongoose.Schema(
  {
    fieldA: { type: String, required: true },
    fieldB: { type: String, required: true },
  },
  { collection: 'collectionB' },
);

export interface CollectionB {
  fieldA: string;
  fieldB: string;
}

export type CollectioBDocument = mongoose.Document & CollectionB;
