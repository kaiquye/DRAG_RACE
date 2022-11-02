import * as express from "express";
import * as socket from "socket.io";
import * as http from "http";
import CorsConfig from "./infrastructure/middlewares/cors/cors.config";
import EventsWebSocket from "./modules/WebSocket/infrastructure/events/events";

const log = console.log;

const application = function () {
  try {
    const PORT = 3002;
    const app = express();
    const server = http.createServer(app);

    app.use(express.json());
    app.use(CorsConfig);

    const io = new socket.Server(server);

    io.on("connection", (events) => {
      new EventsWebSocket(events, io).Room();
    });

    server.listen(PORT, () => log("Bomb Has Been Planted..."));
  } catch (e) {
    log(e);
  }
};

application();
