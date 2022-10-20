import {Request, Response} from "express";
import { FilterField } from "../controller/flterField";
import { TableDatas } from "../controller/tableDatas";
import { TotalCount } from "../controller/count";
export class Routes {
    public FilterField: FilterField = new FilterField();
    public TableDatas: TableDatas= new TableDatas();
    public TotalCount: TotalCount= new TotalCount();

    public routes(app:any): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

/*-------------------Filter field API's---------------------------------------*/

       //api for getting leg vendor liner
       app.get("/lvl",this.FilterField.lvl)

       //api for getting origin port
       app.get("/origin",this.FilterField.origin)

       //api for getting destination port
       app.get("/destination",this.FilterField.destination)

       //api for getting charge name
       app.get("/charge",this.FilterField.charge)


/*-------------------------Table Datas------------------------------------------*/

      //api for getting table datas
      app.get("/tabledata",this.TableDatas.datas)


/*------------------------------count--------------------------------------------*/
     
    //api for count
    app.get("/count",this.TotalCount.count)        


    }
}