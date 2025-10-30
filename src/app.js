import express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express()

app.use(cors({
  origin: '*', // Replace with your frontend URL
  credentials: true, // Allow credentials like cookies and authorization headers
}));



app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import patientRoute from "./routes/patient.routes.js"
import userRoute from "./routes/user.route.js"
import doctorRoute from "./routes/doctor.route.js"

import prescriptionRoute from './routes/prescription.route.js'
app.use("/api/v1/users",userRoute)
app.use("/api/v1/patient",patientRoute)
app.use("/api/v1/doctor",doctorRoute)
app.use('/api/v1/prescription',prescriptionRoute)




export default app