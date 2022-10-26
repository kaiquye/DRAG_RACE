import { Router } from "express";
import HttpAdapter from "../adapter/http.adapter";
import StartGameController from "../controllers/startGame.controller";

const gameRoutes = Router();
const urlBase = "/game";

gameRoutes.get(urlBase + "/", HttpAdapter(StartGameController.execute));

export default gameRoutes;
