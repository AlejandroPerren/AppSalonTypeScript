import express from "express";
import { getAppointments } from "../controllers/dates/getDates";


const router = express.Router();

router.get("/getDates", getAppointments );
router.post("/createService", );
router.patch("/updateService/:servicesId", );


export default router