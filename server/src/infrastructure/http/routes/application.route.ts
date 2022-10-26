import { Router } from "express";
import gameRoutes from "../../../modules/game/infrastructure/http/routes/route";

class ApplicationRoute {
  public readonly router = Router();
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.allRoutes();
  }

  private allRoutes(): void {
    this.router.use(this.baseUrl, gameRoutes);
  }
}

export default ApplicationRoute;
