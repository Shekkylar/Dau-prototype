import { Request, Response } from 'express';


import { tabledatas } from '../repoistory/tableDatas';

export default class tableDatas{

  //leg,vendor,liner
  public async tabledatas(req:Request) {

    const filter=req.query;
    const skip=req.query.skip;
    const limit=req.query.limit;
    for (let x in filter) {
      if(filter[x]==null||undefined){
        delete filter[x]
      }
    }
    delete filter.skip;
    delete filter.limit;
    console.log(filter)
      const datas:any= await tabledatas(filter,skip,limit);
      return datas;
      
  }

}