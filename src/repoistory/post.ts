import * as mongoose from 'mongoose';
// import { Request, Response } from 'express';

const Schema = mongoose.Schema

const testCollectionSchema = new Schema({}, { strict: false })
const col = mongoose.model('fcllegs', testCollectionSchema);


export const getleg = async (agg:any)=>{
  const res = await col.aggregate(agg, (err: any, col: any) => {
        if(err){
            return(err);
        }
        return col;
    });  
    return res;
}

export const batchcode = async (filter:any)=>{
       const res = await col.find(filter)
       return res;
  }


  export const removecharge = async (_id:any,charge_id:any)=>{

    var a:string
    const res1= await  col.findOneAndUpdate(
        {'_id': Object(_id)}, 
        { $pull: { "data.charges" : { "charge_id": charge_id } } },
     );
     a="update successful"
    return a;
}

export const updatecharge = async (_id:any,charge_id:any,filter:any)=>{

    var a:string
    // console.log(filter)
    const res1= await  col.updateOne(
        {'_id': Object(_id),'data.charges.charge_id':charge_id}, 
        { $set: filter }
     );
     a="update successful"
    return a;
}

export const addcharge = async (_id:any,filter:any)=>{

    var a:string
    // console.log(filter)
    console.log(Date())
    
    const res1= await  col.updateOne(
        {'_id': Object(_id)}, 
        { $push: { "data.charges" : { "charge_name": (filter.charge_name?filter.charge_name:""),
                   "charge_id" : (filter.charge_id?filter.charge_id:""),
                   "charge_description" : (filter.charge_description?filter.charge_description:""),
                   "charge_basis" : (filter.charge_basis?filter.charge_basis:""),
                   "per_unit_rate" : (filter.per_unit_rate?filter.per_unit_rate:""),
                   "total_units" : (filter.total_units?filter.total_units:""),
                   "charge_cost" : (filter.charge_cost?filter.charge_cost:""),
                   "charge_currency" : (filter.charge_currency?filter.charge_currency:""),
                   "minimum_charge_cost" : (filter.minimum_charge_cost?filter.minimum_charge_cost:""),
                   "container_type" : (filter.container_type?filter.container_type:""),
                   "global_charge_id" : (filter.global_charge_id?filter.global_charge_id:""),
                   "customer_currency_cost" : (filter.customer_currency_cost?filter.customer_currency_cost:""),
                   "created_at" :Date(),
                   "updated_at" :Date(),                
                   "leg_currency_cost" : (filter.leg_currency_cost?filter.leg_currency_cost:""),
                   "charge_source" : (filter.charge_source?filter.charge_source:""),
                   "charge_type" : (filter.charge_type?filter.charge_type:""),
                   "slab_type" : (filter.slab_type?filter.slab_type:""),
                   "slab_rate" : (filter.slab_rate?filter.slab_rate:""),
                   "slab" : (filter.slab?filter.slab:""),
                   "id" : Object(_id)
        } } }
     );
     a="update successful"
    return a;
}

export const updateoperation = async (_id:any,filter:any)=>{

    var a:string
    // console.log(filter)
    const res1= await  col.updateOne(
        {'_id': Object(_id)}, 
        { $set: filter }
     );
     a="update successful"
    return a;
}
