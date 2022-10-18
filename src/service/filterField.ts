import { Request, Response } from 'express';


import { lvl,origin,destination,charges } from '../repoistory/filterField';

export default class filterField{

  //leg,vendor,liner
  public async lvl(req:Request) {

    const filter=req.query;
    // console.log(req.query)
      const LVL:any= await lvl(filter);
      return LVL;
  }

  //origin
  public async origin(req:Request) {
    let filter=req.query;
    for (let x in filter) {
      if(filter[x]=='null'||filter[x]=='undefined'||filter[x]==''){
        delete filter[x]
      }
    }  
      const Origin:any= await origin(filter);
      return Origin;
} 

  //destination
  public async destination(req:Request) {
    let filter=req.query;
    for (let x in filter) {
      if(filter[x]=='null'||filter[x]=='undefined'||filter[x]==''){
        delete filter[x]
      }
    }
      const Destination:any= await destination(filter);
      return Destination;
  } 

  //charge
  public async charge(req:Request) {
    let filter=req.query;
    for (let x in filter) {
      if(filter[x]=='null'||filter[x]=='undefined'||filter[x]==''){
        delete filter[x]
      }
    }
    const Charges:any= await charges(filter);
    return Charges;
} 

}