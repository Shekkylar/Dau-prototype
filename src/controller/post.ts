import { Request, Response } from 'express';
import Leg from "../service/post"

export class Controller{
    private getleg=new Leg();
    constructor(){
        this.getleg= new Leg();
    }
count = async (req: Request, res: Response)=> {
    
      try{
          const response= await this.getleg.count(req)
       res.send(""+response)
      } catch(err){
        res.send(err);
      }
   }

   lvl = async (req: Request, res: Response)=> {
    
      try{
          const response= await this.getleg.lvl(req)
       res.send(response)
      } catch(err){
        res.send(err);
      }
   }


batchcode = async (req: Request, res: Response)=> {
    
        try{
            const response= await this.getleg.batchcode(req)
         res.send(response)
        } catch(err){
          res.send(err);
        }
     }

 filter = async (req: Request, res: Response)=> {
    
      try{
          const response= await this.getleg.filter(req)
       res.send(response)
      } catch(err){
        res.send(err);
      }
   }
   
   
leg = async (req: Request, res: Response)=> {
    
   try{
       const response= await this.getleg.getleg(req)
    res.send(response)
   } catch(err){
     res.send(err);
   }
}

vendor = async (req: Request, res: Response)=> {
    
    try{
        const response= await this.getleg.vendor(req)
     res.send(response)
    } catch(err){
      res.send(err);
    }
 }

 liner = async (req: Request, res: Response)=> {
    
    try{
        const response= await this.getleg.liner(req)
     res.send(response)
    } catch(err){
      res.send(err);
    }
 }

 origin = async (req: Request, res: Response)=> {
    
    try{
        const response= await this.getleg.origin(req)
     res.send(response)
    } catch(err){
      res.send(err);
    }
 }

 destination = async (req: Request, res: Response)=> {
    
    try{
        const response= await this.getleg.destination(req)
     res.send(response)
    } catch(err){
      res.send(err);
    }
 }

 cargo = async (req: Request, res: Response)=> {
    
    try{
        const response= await this.getleg.cargo(req)
     res.send(response)
    } catch(err){
      res.send(err);
    }
 }

 charge = async (req: Request, res: Response)=> {
    
    try{
        const response= await this.getleg.charge(req)
     res.send(response)
    } catch(err){
      res.send(err);
    }
 }

 loadtypes = async (req: Request, res: Response)=> {
    
    try{
        const response= await this.getleg.loadtypes(req)
     res.send(response)
    } catch(err){
      res.send(err);
    }
 }

 //-------------------------------------------------------------------update charge--------------------------------------------------------------------------------------//
 removecharge = async (req: Request, res: Response)=> {
    
   try{
       const response= await this.getleg.removecharge(req)
    res.send(response)
   } catch(err){
     res.send(err);
   }
}

updatecharge = async (req: Request, res: Response)=> {
    
   try{
       const response= await this.getleg.updatecharge(req)
    res.send(response)
   } catch(err){
     res.send(err);
   }
}

addcharge = async (req: Request, res: Response)=> {
    
   try{
       const response= await this.getleg.addcharge(req)
    res.send(response)
   } catch(err){
     res.send(err);
   }
}

updateoperation = async (req: Request, res: Response)=> {
    
   try{
       const response= await this.getleg.updateoperation(req)
    res.send(response)
   } catch(err){
     res.send(err);
   }
}

update = async (req: Request, res: Response)=> {
    
   try{
       const response= await this.getleg.update(req)
    res.send(response)
   } catch(err){
     res.send(err);
   }
}




// public vendor (req: Request, res: Response) {
//     const agg = [
//         {
//           '$match': {
//             'data.batchcode': req.query.batchcode
//           }
//         }, {
//           '$project': {
//             'data.vendor.vendor_name': 1,
//             '_id': 0
//           }
//         }, {
//           '$group': {
//             '_id': '$data.vendor.vendor_name'
//           }
//         }
//       ];
//     col.aggregate(agg, (err: any, col: any) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(col);
//     });
// }

// public liner (req: Request, res: Response) {
//     const agg = [
//         {
//           '$match': {
//             'data.batchcode': req.query.batchcode
//           }
//         }, {
//           '$project': {
//             'data.sub_vendor.sub_vendor_name': 1,
//             '_id': 0
//           }
//         }, {
//           '$group': {
//             '_id': '$data.sub_vendor.sub_vendor_name'
//           }
//         }
//       ];
//     col.aggregate(agg, (err: any, col: any) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(col);
//     });
// }

// public origin (req: Request, res: Response) {
//     const agg = [
//         {
//           '$match': {
//             'data.batchcode': req.query.batchcode
//           }
//         }, {
//           '$project': {
//             '_id': 0,
//             'meta.origin_port': 1
//           }
//         }, {
//           '$group': {
//             '_id': '$meta.origin_port'
//           }
//         }
//       ];
//     col.aggregate(agg, (err: any, col: any) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(col);
//     });
// }

// public destination (req: Request, res: Response) {
//     const agg = [
//         {
//           '$match': {
//             'data.batchcode': req.query.batchcode
//           }
//         }, {
//           '$project': {
//             '_id': 0,
//             'meta.destination_port': 1
//           }
//         }, {
//           '$group': {
//             '_id': '$meta.origin_port'
//           }
//         }
//       ];
//     col.aggregate(agg, (err: any, col: any) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(col);
//     });
// }

// public cargo (req: Request, res: Response) {
//     const agg = [
//         {
//           '$match': {
//             'data.batchcode': req.query.batchcode
//           }
//         }, {
//           '$project': {
//             '_id': 0,
//             'data.cargo_type': 1
//           }
//         }, {
//           '$group': {
//             '_id': '$data.cargo_type'
//           }
//         }
//       ];
//     col.aggregate(agg, (err: any, col: any) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(col);
//     });
// }

// public charge (req: Request, res: Response) {
//     const agg = [
//         {
//           '$match': {
//             'data.batchcode': req.query.batchcode
//           }
//         }, {
//           '$project': {
//             '_id': 0,
//             'data.cargo_type': 1
//           }
//         }, {
//           '$group': {
//             '_id': '$data.cargo_type'
//           }
//         }
//       ];
//     col.aggregate(agg, (err: any, col: any) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(col);
//     });
// }

// public loadtypes (req: Request, res: Response) {
//     const agg = [
//         {
//           '$match': {
//             'data.batchcode': req.query.batchcode
//           }
//         }, {
//           '$project': {
//             '_id': 0,
//             'data.cargo_type': 1
//           }
//         }, {
//           '$group': {
//             '_id': '$data.cargo_type'
//           }
//         }
//       ];
//     col.aggregate(agg, (err: any, col: any) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(col);
//     });
// }



// public getcolWithID (req: Request, res: Response) {
//     col.findById(req.params.colId, (err: any, col: any) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(col);
//     });
// }

// public updatecol (req: Request, res: Response) {
//     col.findOneAndUpdate({ firstName: req.params.colId }, req.body, { new: true }, (err, col) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(col);
//     });
// }

// public deletecol (req: Request, res: Response) {
//     col.remove({ _id: req.params.colId }, (err: any) => {
//         if(err){
//             res.send(err);
//         }
//         res.json({ message: 'Successfully deleted col!'});
//     });
// }
}