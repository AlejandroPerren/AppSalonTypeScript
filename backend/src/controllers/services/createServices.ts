import {RequestHandler} from "express";
import createHttpError from "http-errors";
import ServicesModel from "../../models/servicesModel";
interface CreateServicesModel {
    name? : string;
    price?: number;
}

export const createService: RequestHandler<unknown, unknown, CreateServicesModel, unknown> = async (req, res, next)=>{
    const {name, price} = req.body;

    try {
        if(!name || !price){
            throw createHttpError(400, "Necesitas todos los campos para crear un servicio")
        }
        const newService = await ServicesModel.create({
            name: name,
            price: price,
        })

        res.status(201).json(newService)

    } catch (error) {
        next(error);
    }

}