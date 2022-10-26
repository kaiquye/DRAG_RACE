import * as express from "express";
import ApplicationRoute from "./infrastructure/http/routes/application.route";
const log = console.log;

const application = function () {
  try {
    const PORT = 3002;
    const app = express();
    const applicationRoutes = new ApplicationRoute("/development/v1");

    app.use(express.json());
    app.use(applicationRoutes.router);

    app.listen(PORT, () => log("Bomb Has Been Planted..."));
  } catch (e) {
    log(e);
  }
};

application();
