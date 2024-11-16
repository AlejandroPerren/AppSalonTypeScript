import express from "express";
import { getServices } from "../controllers/services/getServices";
import { createService } from "../controllers/services/createServices";
import { updateService } from "../controllers/services/updateServices";
import { deleteService } from "../controllers/services/deleteServices";


const router = express.Router();

router.get("/getServices", getServices);
router.post("/createService", createService);
router.patch("/updateService/:servicesId", updateService);
router.delete("/deleteService/:serviceId", deleteService)

export default router