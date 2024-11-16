import { RequestHandler } from "express";
import ServicesModel from "../../models/servicesModel"

export const getServices: RequestHandler = async (req,res , next)=>{

    try{
    const listServices = await ServicesModel.find().exec();
    res.status(200).json(listServices);

} catch(error){
    next(error);
}
}

 