import { Router } from "express";

import { registerPatient,loginPatient,logoutPatient } from "../controllers/patient.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router()



router.route("/register").post(registerPatient)
router.route("/login").post(loginPatient)
router.route("/logout").post(verifyJWT,logoutPatient)


export default router
