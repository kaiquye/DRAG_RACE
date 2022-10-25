import { Router } from "express";
import Controller from "./teste";
import HttpAdapter from "../adapters/controllers/controller.adapter";

class ApplicationRoute {
  public readonly router = Router();
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.allRoutes();
  }

  private allRoutes(): void {
    this.router.use(this.baseUrl + "/game", HttpAdapter(Controller.execute));
  }
}

export default ApplicationRoute;
