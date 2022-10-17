import { Request, Response } from 'express';


import { lvl,origin,destination,charges } from '../repoistory/filterField';

export default class filterField{

  //leg,vendor,liner
  public async lvl(req:Request) {

    const filter=req.query;
    console.log(req.query)
      const leg:any= await lvl(filter);
      return leg;
  }

  //origin
  public async origin(req:Request) {
    let filter=req.query;
    for (let x in filter) {
      if(filter[x]=='null'||filter[x]=='undefined'||filter[x]==''){
        delete filter[x]
      }
    }

    const agg = [
              {
                '$match': filter
              }, {
                '$project': {
                  '_id': 0,
                  'meta.origin_port': 1
                }
              }, {
                '$group': {
                  '_id': '$meta.origin_port'
                }
              }
            ];     
      const Origin:any= await origin(agg);
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
    const agg = [
      {
        '$match': filter
      }, {
        '$project': {
          '_id': 0,
          'meta.destination_port': 1
        }
      }, {
        '$group': {
          '_id': '$meta.destination_port'
        }
      }
    ];
      const Destination:any= await destination(agg);
      return Destination;
  } 

  //charge
  public async charge(req:Request) {

    const Charges:any= await charges(req.query);
    return Charges;
} 

}