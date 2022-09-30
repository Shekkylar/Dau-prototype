import {Request, Response} from "express";
import { Controller } from "../controller/post";
export class Routes {
    public Controller: Controller = new Controller();
    public routes(app:any): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        // LABEL endpoint
        app.get("/leg",this.Controller.leg)
        app.get("/vendor",this.Controller.vendor)
        app.get("/liner",this.Controller.liner)
        app.get("/origin",this.Controller.origin)
        app.get("/destination",this.Controller.destination)
        app.get("/cargo",this.Controller.cargo)
        app.get("/charge",this.Controller.charge)
        app.get("/loadtypes",this.Controller.loadtypes)
        app.get("/batchcode",this.Controller.batchcode)

        // Update charges endpoint
        app.put("/removecharge/:_id",this.Controller.removecharge)
        app.put("/updatecharge/:_id/:charge_id",this.Controller.updatecharge)
        app.put("/addcharge/:_id",this.Controller.addcharge)

        // update Operation endpoint
        app.put("/updateoperation/:_id",this.Controller.updateoperation)
        // POST endpoint
        //  .post(this.colController.addNewcol);
       
        // col detail
        // app.route('/col/:colId')
        // get a specific col
        // .get(this.Controller.getcolWithID)
        // update a specific col
        // .put(this.Controller.updatecol)
        // delete a specific col
        // .delete(this.colController.deletecol)
    }
}