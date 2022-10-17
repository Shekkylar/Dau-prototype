import { Request, Response } from 'express';
import tableDatas from "../service/tableDatas"


export class TableDatas{
    private tabledatas=new tableDatas();
    constructor(){
        this.tabledatas= new tableDatas();
    }

    datas = async (req: Request, res: Response)=> {
    
        try{
            const response= await this.tabledatas.tabledatas(req)
         res.send(response)
        } catch(err){
          res.send(err);
        }
     }

    }     