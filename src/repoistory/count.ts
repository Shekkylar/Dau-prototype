import { col } from "../Database/dbConnection";

export const count = async (filter:any)=>{
    const res = await col.countDocuments(filter)
    return (res);
}  