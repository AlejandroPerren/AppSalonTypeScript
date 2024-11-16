import { RequestHandler } from "express";
import ServicesModel from "../../models/servicesModel";
import mongoose from "mongoose";
import createHttpError from "http-errors";


interface UpdateServiceParams {
    servicesId: string;
}

interface UpdateServiceBody {
    name?: string;
    price?: number
}

export const updateService: RequestHandler<UpdateServiceParams, unknown, UpdateServiceBody, unknown> = async (req, res, next)=>{
    const serviceId = req.params.servicesId;
    const newName= req.body.name;
    const newPrice = req.body.price;

    try {
        if(!mongoose.isValidObjectId(serviceId)){
            throw createHttpError(400, "ID invalido");
        }
    if(!newName){
        throw createHttpError(400, "Se necesita un nombre para el servicio");
    }

    const service = await ServicesModel.findById(serviceId).exec();
    if(!service){
        throw createHttpError(404, "Servicio no encontrado")
    }

    service.name = newName;
    if(typeof newPrice === "number"){
        service.price = newPrice;
    }
    const serviceUpdate = await service.save();

    res.status(200).json(serviceUpdate)

    } catch (error) {
        next(error);
    }

}