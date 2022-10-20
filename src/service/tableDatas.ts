import { Request, Response } from 'express';


import { tabledatas } from '../repoistory/tableDatas';

export default class tableDatas{

  //leg,vendor,liner
  public async tabledatas(req:Request) {
    let datas:any=null;

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
    delete filter.skip;"null"
    delete filter.limit;
    console.log(filter)
    


    if(start_date!="null"||end_date!="null")
    {
      if(start_date!="null"&&end_date==="null")
      {
        start_date=start_date+"T00:00:00.000Z";
        var value={$gt : String(start_date)}
        filter['meta.start_date']=value;
        console.log(filter,"====")
        datas= await tabledatas(filter,skip,limit);
        
      }
      else if(start_date==="null"&&end_date!="null")
      {
        end_date=end_date+"T00:00:00.000Z";
        var value1={$lt : String(end_date)}
        filter['data.expiry']=value1;
        console.log(filter,"====")
         datas= await tabledatas(filter,skip,limit);
       
      }
      else{
        start_date=start_date+"T00:00:00.000Z";
        var value={$gt : String(start_date)}
        filter['meta.start_date']=value;
        end_date=end_date+"T00:00:00.000Z";
        var value1={$lt : String(end_date)}
        filter['data.expiry']=value1;
        console.log(filter,"====")
         datas= await tabledatas(filter,skip,limit);
        
      }
    }
    else{
       datas= await tabledatas(filter,skip,limit);
    }
    console.log(datas)
    const output=[]
      for(let i=0;i<datas.length;i++){
      let temp:{_id:any,origin_port:any,destination_port:any,via_port:any,load_type:any,contract_number:any,start_date:any,remarks:any,inclusion:any,expiry:any,other_charges:any,if_applicable_charges:any,via_pol:any,via_pod:any,service_type:any,cargo_type:any,commodity:any,charges:any}=
      {
        _id:datas[i]._id,
        origin_port:datas[i].meta.origin_port,
        destination_port:datas[i].meta.destination_port,
        via_port:datas[i].data.via_port,
        load_type:datas[i].meta.load_type,
        contract_number:datas[i].data.contract_number,
        start_date:datas[i].meta.start_date,
        remarks:datas[i].data.remarks,
        inclusion:datas[i].data.inclusions,
        expiry:datas[i].data.expiry,
        other_charges:datas[i].data.other_charges,
        if_applicable_charges:datas[i].data.if_applicable_charges,
        via_pod:datas[i].data.via_pod,
        via_pol:datas[i].data.via_pol,
        service_type:datas[i].data.service_type,
        cargo_type:datas[i].data.cargo_type,
        commodity:datas[i].data.commodity,
        charges:datas[i].data.charges,
      }
        output.push(temp);
    }
      return output ;
    }
      
  }

