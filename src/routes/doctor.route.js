import { Router } from "express";

import { registerDoctor, loginDoctor, logoutDoctor } from "../controllers/doctor.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registerDoctor);
router.route("/login").post(loginDoctor);
router.route("/logout").post(verifyJWT, logoutDoctor);

export default router;
