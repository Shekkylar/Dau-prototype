import { col } from "../Database/dbConnection";
//leg,vendor,liner
export const lvl = async (filter:any)=>{
    const res = await col.findOne(filter,{"data.leg_code":1,"data.vendor.vendor_name":1,"data.sub_vendor.sub_vendor_name":1,_id:0})
    return (res);
}   

//origin
export const origin = async (filter:any)=>{
    const res = await col.distinct("meta.origin_port",filter)
    let output=[];
    for(let i=0;i<res.length;i++){
        const origin_port: { origin: string} = {
            origin: res[i],
        }
        output.push(origin_port)}
      return output;
  }

//Destination
export const destination = async (filter:any)=>{
    const res = await col.distinct("meta.destination_port",filter)
    let output=[];
    for(let i=0;i<res.length;i++){
        const destination_port: { destination: string} = {
            destination: res[i],
        }
        output.push(destination_port)}
      return output;
  }  

  //charge
export const charges = async (filter:any)=>{
    const res = await col.distinct("data.charges.charge_name",filter)
    let output=[];
    for(let i=0;i<res.length;i++){
        const Charges: { charge: string} = {
            charge: res[i],
        }
        output.push(Charges)}
      return output;
    } 