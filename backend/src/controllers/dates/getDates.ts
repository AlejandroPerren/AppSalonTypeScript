import { RequestHandler } from "express";
import DateModel from "../../models/datesModel"; 

export const getAppointments: RequestHandler = async (req, res, next) => {

  try {
   
    const appointments = await DateModel.find()
      .populate("userId", "name lastname email") 
      .populate("services.serviceId", "name price"); 

    res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
};
