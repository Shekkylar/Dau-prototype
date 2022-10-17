import * as mongoose from 'mongoose';
// import { Request, Response } from 'express';

const Schema = mongoose.Schema

const testCollectionSchema = new Schema({}, { strict: false })

export const col = mongoose.model('prioritys', testCollectionSchema);