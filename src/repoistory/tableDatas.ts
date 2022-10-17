import { col } from "../Database/dbConnection";


export const tabledatas = async (filter:any,skip:any,limit:any)=>{
    var y: number = +skip
    var z: number = +limit
    console.log(y)
    console.log(z)
       const res = await col.find(filter).skip(y*z).limit(z)
       console.log(res)
       return res;
} 