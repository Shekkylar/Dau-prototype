import { col } from "../Database/dbConnection";


export const tabledatas = async (filter:any,skip:any,limit:any)=>{
    var y: number = +skip
    var z: number = +limit
    console.log(y)
    console.log(z)
       const res = await col.find(filter,{
        'meta.origin_port': 1,
        'meta.destination_port': 1,
        'data.via_port': 1,
        'meta.load_type': 1,
        'data.contract_number': 1,
        'data.transit_time': 1,
        'data.other_charges': 1,
        'data.service_type': 1,
        'data.inclusions': 1,
        'data.if_applicable_charges': 1,
        'data.remarks': 1,
        'meta.start_date': 1,
        'data.expiry': 1,
        'data.via_pol': 1,
        'data.via_pod': 1,
        'data.cargo_type': 1,
        'data.commodity': 1,
        'data.charges.charge_id': 1,
        'data.charges.charge_name': 1,
        'data.charges.charge_cost': 1,
        'data.charges.charge_basis': 1,
        'data.charges.charge_currency': 1,
        'data.charges.charge_description': 1
      }).skip(y*z).limit(z)
       console.log(res)
       return res;
} 