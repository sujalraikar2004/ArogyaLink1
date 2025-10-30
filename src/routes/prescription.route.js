import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { createPrescription } from "../controllers/prescription.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/").post( createPrescription)


export default router