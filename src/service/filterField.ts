import { Request, Response } from 'express';



import { lvl,origin,destination,charges } from '../repoistory/filterField';

export default class filterField{

  //leg,vendor,liner
  public async lvl(req:Request) {

    const filter=req.query;
    // console.log(req.query)
      const LVL:any= await lvl(filter);
      let leg=[]
      let vendor=[]
      let liner=[]
      let leg1: { leg: string} = {
        leg: LVL.data.leg_code,
    }
    let liner1: { liner: string} = {
      liner: LVL.data.sub_vendor.sub_vendor_name,
  }
  let vendor1: { vendor: string} = {
    vendor: LVL.data.vendor.vendor_name,
}
      leg.push(leg1)
      liner.push(liner1)
      vendor.push(vendor1)
      let data: {leg:any,liner:any,vendor:any}={
        leg:leg,
        liner:liner,
        vendor:vendor,
      }
      
      return data;
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