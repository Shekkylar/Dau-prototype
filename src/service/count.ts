
import { Request, Response } from 'express';



import { count} from '../repoistory/count';

export default class totalCount{

    public async count(req:Request) {
        let filter=req.query;
        for (let x in filter) {
          if(filter[x]=='null'||filter[x]=='undefined'||filter[x]==''){
            delete filter[x]
          }
        }  
          const totalcount:any= await count(filter);
          return totalcount;
    } 

} 