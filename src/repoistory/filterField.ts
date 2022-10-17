import { col } from "../Database/dbConnection";
//leg,vendor,liner
export const lvl = async (filter:any)=>{
    const res = await col.findOne(filter,{"data.leg_code":1,"data.vendor.vendor_name":1,"data.sub_vendor.sub_vendor_name":1,"id":0})
    console.log(res);
    return (res);
}  

//origin
export const origin = async (agg:any)=>{
    const res = await col.aggregate(agg, (err: any, col: any) => {
          if(err){
              return(err);
          }
          return col;
      });  
      return res;
  }

//Destination
export const destination = async (agg:any)=>{
    const res = await col.aggregate(agg, (err: any, col: any) => {
          if(err){
              return(err);
          }
          return col;
      });  
      return res;
  }  

  //charge
  export const charges = async (filter:any)=>{
    const res = await col.distinct("data.charges.charge_name",filter)
      return res;
  }