import { Request, Response } from 'express';
import totalCount from "../service/count"

export class TotalCount{
   private totalcount=new totalCount();
   constructor(){
       this.totalcount= new totalCount();
   }

   count = async (req: Request, res: Response)=> {
    
    try{
        const response= await this.totalcount.count(req)
     res.send(String(response))
    } catch(err){
      res.send(err);
    }
 }

}