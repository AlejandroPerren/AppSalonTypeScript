import { RequestHandler } from "express";
import createHttpError from "http-errors";
import DateModel from "../../models/datesModel"; 
import UserModel from "../../models/userModel"; 
import ServicesModel from "../../models/servicesModel"; 

interface CreateAppointmentBody {
  date: string;
  time: string;
  userId: string;
  services: Array<{
    serviceId: string;
    name: string;
    price: number;
  }>;
}

export const createAppointment: RequestHandler<unknown, unknown, CreateAppointmentBody, unknown> = async (req, res, next) => {
  const { date, time, userId, services } = req.body;

  try {
    if (!date || !time || !userId || !services || services.length === 0) {
      throw createHttpError(400, "Todos los campos son obligatorios");
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      throw createHttpError(404, "El usuario no existe");
    }

    for (const service of services) {
      const existingService = await ServicesModel.findById(service.serviceId);
      if (!existingService) {
        throw createHttpError(404, `El servicio con ID ${service.serviceId} no existe`);
      }
      if (existingService.name !== service.name || existingService.price !== service.price) {
        throw createHttpError(400, `Los datos del servicio con ID ${service.serviceId} no coinciden`);
      }
    }

    const newAppointment = await DateModel.create({
      date,
      time,
      userId,
      services,
    });

    res.status(201).json(newAppointment);
  } catch (error) {
    next(error);
  }
};
