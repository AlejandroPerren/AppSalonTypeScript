import { RequestHandler } from "express";
import ServicesModel from "../../models/servicesModel";
import mongoose from "mongoose";
import createHttpError from "http-errors";


export const deleteService: RequestHandler = async (req, res, next)=>{
    const serviceId = req.params.serviceId;
    try{
        if(!mongoose.isValidObjectId(serviceId)){
            throw createHttpError(400, "ID invalido");
        }
        const service = await ServicesModel.findById(serviceId).exec();
        if(!service){
            throw createHttpError(404, "Servicio no encontrado")
        }
        await service.deleteOne();
        res.status(204);
    } catch (error) {
        next(error);
    }

}