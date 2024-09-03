import { Router } from "express";
import path from "path";
import { customizedMulter } from "../multer.js";
import { signUpService } from "../Services/signUpServices.js";
import { signInService } from "../Services/signInServices.js";
import { authMiddleware } from "../Middleware/authmiddleware.js";
import { profileService } from "../Services/profileService.js";

export const appRouter = new Router();

appRouter.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

appRouter.get("/sign-in", (req, res) => {
  res.sendFile(path.resolve("./views/sign-in.html"));
});

appRouter.get("/sign-up", (req, res) => {
  res.sendFile(path.resolve("./views/sign-up.html"));
});

appRouter.get("/profile/:id/:token", authMiddleware, profileService);

// post

appRouter.post("/sign-in", customizedMulter.single("avatar"), signInService);
appRouter.post("/sign-up", signUpService);
