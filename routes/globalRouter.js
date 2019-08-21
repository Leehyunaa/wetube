import express from "express";
import routes from "../routes";
import { onlyPublic } from "../middlewares";
import { search } from "../controllers/videoController";
import {
  postJoin,
  getJoin,
  logout,
  getLogin,
  postLogin
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
