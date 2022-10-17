import { Request, Response } from 'express';
import filterField from "../service/filterField"

export class FilterField{
   private filterfield=new filterField();
   constructor(){
       this.filterfield= new filterField();
   }

   //Leg , vendor ,linear
   lvl = async (req: Request, res: Response)=> {
    
      try{
          const response= await this.filterfield.lvl(req)
       res.send(response)
      } catch(err){
        res.send(err);
      }
   }

   //Origin
 origin = async (req: Request, res: Response)=> {
    
   try{
       const response= await this.filterfield.origin(req)
    res.send(response)
   } catch(err){
     res.send(err);
   }
}

 //Destination
destination = async (req: Request, res: Response)=> {
   
   try{
       const response= await this.filterfield.destination(req)
    res.send(response)
   } catch(err){
     res.send(err);
   }
}

//charges
charge = async (req: Request, res: Response)=> {
    
   try{
       const response= await this.filterfield.charge(req)
    res.send(response)
   } catch(err){
     res.send(err);
   }
}


}