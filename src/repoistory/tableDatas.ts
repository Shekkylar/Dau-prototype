import * as mongoose from 'mongoose';
// import { Request, Response } from 'express';

const Schema = mongoose.Schema

const testCollectionSchema = new Schema({}, { strict: false })
const col = mongoose.model('prioritys', testCollectionSchema);


export const tabledatas = async (filter:any,skip:any,limit:any)=>{
    var y: number = +skip
    var z: number = +limit
    console.log(y)
    console.log(z)
       const res = await col.find(filter).skip(y*z).limit(z)
       console.log(res)
       return res;
} 