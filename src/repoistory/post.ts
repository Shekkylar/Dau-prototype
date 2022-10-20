import { timeLog } from 'console';
import * as mongoose from 'mongoose';
// import { Request, Response } from 'express';

const Schema = mongoose.Schema

const testCollectionSchema = new Schema({}, { strict: false })
const col = mongoose.model('prioritys', testCollectionSchema);

export const filter = async (agg:any)=>{
    const res = await col.aggregate(agg, (err: any, col: any) => {
          if(err){
              return(err);
          }
          return col;
      });  
      return res;
  }

export const getleg = async (agg:any)=>{
  const res = await col.aggregate(agg, (err: any, col: any) => {
        if(err){
            return(err);
        }
        return col;
    });  
    return res;
}

export const charges = async (filter:any)=>{
    const res = await col.distinct("data.charges.charge_name")
      return res;
  }


export const batchcode = async (filter:any,skip:any,limit:any)=>{

    var y: number = +skip
    var z: number = +limit
    console.log(y)
    console.log(z)
       const res = await col.find(filter).skip(y*z).limit(z)
       console.log(res)
       return res;
  }

  export const count = async (filter:any)=>{
    const res = await col.countDocuments(filter)
    return (res);
}  

export const lvl = async (filter:any)=>{
    const res = await col.findOne(filter,{"data.leg_code":1,"data.vendor.vendor_name":1,"data.sub_vendor.sub_vendor_name":1})
    return (res);
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

// export const update = async (bulkData:any)=>{

//     var a:string
//     // console.log(filter)
//     function delay(ms:number) {
//         const date = Date.now();
//         let currentDate = null;
        
//         do {
//             currentDate = Date.now();
//         } while (currentDate - date < ms);
//     }
    
//     // console.log("Hello World");
//     await col.bulkWrite(bulkData);
//     delay(10000);
//     console.log("Will be printed after 10 seconds!");
//      a="update successful"
//     return a;

// }



export const update = async (skip:any,limit:any)=>{
    let IDs: unknown[]=[];

    const res =(await col.find({ "data.batchcode": "0DEt0r3Xzrb2SSw50FGhJ36aG5h8RLY95sdhntWa" },{_id:1}).sort({_id:1}).batchSize(100).skip(skip)
        .limit(limit)).forEach(async function( aRow ) {
            console.log(aRow);
          col.updateMany({_id: { $in: aRow}},
                { "$set": { "meta.destination_port": "port" + Math.floor(Math.random() * 15000) } } 
                )
                // .then(()=>{console.log("updated")}
                // )
                // delay(3000);
            })
          
        
    return ''; 
}
