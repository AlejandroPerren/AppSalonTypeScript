import express from "express";
import { getAppointments } from "../controllers/dates/getDates";
import { createAppointment } from "../controllers/dates/createDate";
import { updateAppointment } from "../controllers/dates/updateDate";


const router = express.Router();

router.get("/getDates", getAppointments );
router.post("/createDates", createAppointment);
router.patch("/updateDates/:datesId", updateAppointment);


export default router