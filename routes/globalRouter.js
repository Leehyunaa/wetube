import express from "express";
import routes from "../routes";
import passport from "passport";
import { onlyPublic, onlyPrivate } from "../middlewares";
import { search, home } from "../controllers/videoController";
import {
  postJoin,
  getJoin,
  logout,
  getLogin,
  postLogin,
  githubLogin,
  postGithubLogIn,
  getMe,
  facebookLogin,
  postFacebookLogin
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);

export default globalRouter;
