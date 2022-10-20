import { randomBytes } from 'crypto';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { stringify } from 'querystring';

import { getleg, batchcode, removecharge, updatecharge, addcharge, updateoperation, update, count, filter, charges, lvl } from '../repoistory/post';

export default class Leg{

  public async count(req:Request) {

    const filter=req.query;
    console.log(req.query)
      const leg:any= await count(filter);
      return leg;
}

public async lvl(req:Request) {

  const filter=req.query;
  console.log(req.query)
    const leg:any= await lvl(filter);
    return leg;
}

  public async batchcode(req:Request) {

    const filter=req.query;
    const skip=req.query.skip;
    const limit=req.query.limit;
    for (let x in filter) {
      if(filter[x]==null||undefined){
        delete filter[x]
      }
    }
    delete filter.skip;
    delete filter.limit;
    console.log(filter)
      const leg:any= await batchcode(filter,skip,limit);
      return leg;
}

public async filter(req:Request) {
  const agg = [
    {
      '$match': {
        'data.batchcode': '0DEt0r3Xzrb2SSw50FGhJ36aG5h8RLY95sdhntWr'
      }
    }, {
      '$group': {
        '_id': 'datas',
        'origin_port': {
          '$addToSet': '$meta.origin_port'
        },
        'destination_port': {
          '$addToSet': '$meta.destination_port'
        },
        'leg_code': {
          '$addToSet': '$meta.leg_code'
        },
        'vendor_name': {
          '$addToSet': '$data.vendor.vendor_name'
        },
        'sub_vendor': {
          '$addToSet': '$data.sub_vendor.sub_vendor_name'
        },
        'cargo_type': {
          '$addToSet': '$data.cargo_type'
        },
        'load_type': {
          '$addToSet': '$meta.load_type'
        }
      }
    }, {
      '$project': {
        '_id': 0
      }
    }
  ];
    const leg:any= await filter(agg);
    return leg;
}


    public async getleg(req:Request) {
        const agg = [
            {
              '$match': {
                'data.batchcode': req.query.batchcode
              }
            }, {
              '$project': {
                '_id': 0,
                'data.leg_code': 1
              }
            }, {
              '$group': {
                '_id': '$data.leg_code'
              }
            }
          ];
          const leg:any= await getleg(agg);
          return leg;
    }

    public async vendor(req:Request) {
      const agg = [
                {
                  '$match': {
                    'data.batchcode': req.query.batchcode
                  }
                }, {
                  '$project': {
                    'data.vendor.vendor_name': 1,
                    '_id': 0
                  }
                }, {
                  '$group': {
                    '_id': '$data.vendor.vendor_name'
                  }
                }
              ];
        const leg:any= await getleg(agg);
        return leg;
  } 

  public async liner(req:Request) {
    const agg = [
              {
                '$match': {
                  'data.batchcode': req.query.batchcode
                }
              }, {
                '$project': {
                  'data.sub_vendor.sub_vendor_name': 1,
                  '_id': 0
                }
              }, {
                '$group': {
                  '_id': '$data.sub_vendor.sub_vendor_name'
                }
              }
            ];
      const leg:any= await getleg(agg);
      return leg;
  }
  
  public async origin(req:Request) {
    const agg = [
              {
                '$match': {
                  'data.batchcode': req.query.batchcode
                }
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
      const leg:any= await getleg(agg);
      return leg;
} 
  
public async destination(req:Request) {
  const agg = [
    {
      '$match': {
        'data.batchcode': req.query.batchcode
      }
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
    const leg:any= await getleg(agg);
    return leg;
} 

public async cargo(req:Request) {
  const agg = [
    {
      '$match': {
        'data.batchcode': req.query.batchcode
      }
    }, {
      '$project': {
        '_id': 0,
        'data.cargo_type': 1
      }
    }, {
      '$group': {
        '_id': '$data.cargo_type'
      }
    }
  ];
    const leg:any= await getleg(agg);
    return leg;
} 

public async charge(req:Request) {

    const leg:any= await charges(req.query.batchcode);
    return leg;
} 

public async loadtypes(req:Request) {
  const agg = [
    {
      '$match': {
        'data.batchcode': req.query.batchcode
      }
    }, {
      '$project': {
        '_id': 0,
        'meta.load_type': 1
      }
    }, {
      '$group': {
        '_id': '$meta.load_type'
      }
    }
  ];
    const leg:any= await getleg(agg);
    return leg;
} 

//------------------------------------------------------update charge------------------------------------------------------------------------

public async removecharge(req:Request) {

    const leg:any= await removecharge(req.params._id,req.query.charge_id);
    return leg;
}

public async updatecharge(req:Request) {

  const leg:any= await updatecharge(req.params._id,req.params.charge_id,req.query);
  return leg;
}

public async addcharge(req:Request) {

  const leg:any= await addcharge(req.params._id,req.query);
  return leg;
}

public async updateoperation(req:Request) {

  const leg:any= await updateoperation(req.params._id,req.query);
  return leg;
}

// public async update(req:Request) {
//   // const singleBatchCount = 10000;
// //  console.log(req.query)

//   // filter[a]
// //   for(let x in updatefield){
// //     if(updatefield[x]!=Object.values(updatefield).pop()){
// //         delete updatefield[x]
// //       }
// // }

// // for(let x in filter){
// //   // if(filter[x]==Object.values(filter).pop()){
// //   //     delete filter[x]
// //   //   }
// //   console.log(x)
// // }

// // console.log(filter)
// // console.log(updatefield)
  
//   //  console.log(req.query)
//   //  console.log(Object.keys(req.body))
//   var filter= req.query;
//  var value={$ne : String(Object.values(req.body))}
//  var b=Object.keys(req.body)
//  filter[String(b)]=(value)
//  console.log(filter)

//  const updatefileld=req.body;
 
//  let records= 1000000;
//  console.log(records);
//   // const noOfProcess = Math.ceil(records/singleBatchCount);
//   // console.log(noOfProcess)
  
// //   for(let index = 1; index <= noOfProcess; index++) {       
// //     let startCount = (index == 1) ? index : (((index - 1) * singleBatchCount) + 1); 
// //     let endCount = index * singleBatchCount;
// //     console.log(startCount)
// //     console.log(endCount)
// //     let bulkData = [];
// //     for(let index = startCount; index <= endCount; index++ ){ 
// //       bulkData.push({ updateOne: {
// //           filter: {'data.slab':{$ne : "30009"}},
// //           update: { $set: { 'data.slab': '30009' } }
// //        } },)
// //       }
// //   const leg:any= await update(bulkData);
// // }
// console.log(filter)
// console.log(updatefileld)
// while(records>0)
// {
//   let bulkData = [];
//   if(records>10000){
//   for(let index = 0; index <= 10000; index++ ){ 
//           bulkData.push({ updateOne: {
//             filter: filter,
//             update: { $set: updatefileld }
//            } },)
//           }await update(bulkData);
//           records-=10000;
//         }
//   else{
//     for(let index = 0; index <= records; index++ ){ 
//       bulkData.push({ updateOne: {
//         filter: filter,
//         update: { $set: updatefileld }
//        } },)
//       }
//       await update(bulkData);
//       records-=records;
      
          
//       // console.log(records)
//     }
//   }   
    
//   }

public async update(req:Request) {
    const singleBatchCount = 5000;
    let records= 500000;
    const noOfProcess = Math.ceil(records/singleBatchCount);
    for(let index = 1; index <= noOfProcess; index++) {       
      let startCount = (index == 1) ? index-1 : (((index - 1) * singleBatchCount)); 
      let endCount = index * singleBatchCount;
      await update(startCount,endCount).then(()=>delay(3000));

      console.log(startCount,endCount)

  }
  function delay(ms:number) {
    const date = Date.now();
    let currentDate = null;
    
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}
}

}
