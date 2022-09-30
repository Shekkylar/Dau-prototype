import { Request, Response } from 'express';
import { getleg, batchcode, removecharge, updatecharge, addcharge, updateoperation } from '../repoistory/post';

export default class Leg{

  public async batchcode(req:Request) {

    const filter=req.query;
    for (let x in filter) {
      if(filter[x]==''){
        delete filter[x]
      }
    }
    console.log(filter)
      const leg:any= await batchcode(filter);
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
  const agg = [
    {
      '$match': {
        'data.batchcode': req.query.batchcode
      }
    }, {
      '$project': {
        '_id': 0,
        'data.charges.charge_name': 1
      }
    }, {
      '$group': {
        '_id': '$data.charges.charge_name'
      }
    }, {
      '$unwind': {
        'path': '$_id'
      }
    }
  ];
    const leg:any= await getleg(agg);
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
}