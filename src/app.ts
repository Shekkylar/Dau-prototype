import { Application } from "express";
import * as mongoose from "mongoose";
import bodyParser from "body-parser";
import { Routes } from "./routes/post";
import express from "express";

class App {
  public mongoUrl: string = 'mongodb+srv://shekkylar:QW4uOZhQT9m2uAH0@poc-cluster.mjx60.mongodb.net/rate';  
  public app: Application;
  public post: Routes = new Routes()

  constructor() {
    this.app = express();
    this.config();
    this.post.routes(this.app);
    this.mongoSetup();
  }

  private config(): void{
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private async mongoSetup(): Promise<void>{
      (<any>mongoose).Promise = global.Promise;
     await mongoose.connect(this.mongoUrl).then(() => console.log('Database connected'))
      };
  }


export default new App().app;