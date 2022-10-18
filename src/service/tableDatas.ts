import { Request, Response } from 'express';


import { tabledatas } from '../repoistory/tableDatas';

export default class tableDatas{

  //leg,vendor,liner
  public async tabledatas(req:Request) {

    const filter=req.query;
    const skip=req.query.skip;
    const limit=req.query.limit;
    let start_date=req.query.start_date;
    let end_date=req.query.end_date;
    for (let x in filter) {
      if(filter[x]=='null'||filter[x]=='undefined'||filter[x]==''){
        delete filter[x]
      }
    }
    delete filter.start_date;
    delete filter.end_date;
    delete filter.skip;
    delete filter.limit;
    console.log(filter)
    


    if(start_date!=undefined||end_date!=undefined)
    {
      if(start_date!=undefined&&end_date===undefined)
      {
        start_date=start_date+"T00:00:00.000Z";
        var value={$gt : String(start_date)}
        filter['meta.start_date']=value;
        console.log(filter,"====")
        const datas:any= await tabledatas(filter,skip,limit);
        return datas;
      }
      else if(start_date===undefined&&end_date!=undefined)
      {
        end_date=end_date+"T00:00:00.000Z";
        var value1={$lt : String(end_date)}
        filter['data.expiry']=value1;
        console.log(filter,"====")
        const datas:any= await tabledatas(filter,skip,limit);
        return datas;
      }
      else{
        start_date=start_date+"T00:00:00.000Z";
        var value={$gt : String(start_date)}
        filter['meta.start_date']=value;
        end_date=end_date+"T00:00:00.000Z";
        var value1={$lt : String(end_date)}
        filter['data.expiry']=value1;
        console.log(filter,"====")
        const datas:any= await tabledatas(filter,skip,limit);
        return datas;
      }
    }
    else{
      const datas:any= await tabledatas(filter,skip,limit);
      return datas;
    }
      
  }

}