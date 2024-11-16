import { RequestHandler } from "express";
import createHttpError from "http-errors";
import DateModel from "../../models/datesModel";
import ServicesModel from "../../models/servicesModel"; 

interface UpdateAppointmentBody {
  date?: string;
  time?: string;
  services?: Array<{
    serviceId: string;
    name: string;
    price: number;
  }>;
}

export const updateAppointment: RequestHandler<{ id: string }, unknown, UpdateAppointmentBody, unknown> = async (req, res, next) => {
  const { id } = req.params;
  const { date, time, services } = req.body;

  try {
    const appointment = await DateModel.findById(id);
    if (!appointment) {
      throw createHttpError(404, "La cita no existe");
    }

    if (date) appointment.date = new Date(date);
    if (time) appointment.time = time;

    if (services) {
      const updatedServices = [];
      for (const service of services) {

        const existingService = await ServicesModel.findById(service.serviceId);
        if (!existingService) {
          throw createHttpError(404, `El servicio con ID ${service.serviceId} no existe`);
        }

  
        if (existingService.name !== service.name || existingService.price !== service.price) {
          throw createHttpError(400, `Los datos del servicio con ID ${service.serviceId} no coinciden`);
        }

  
        updatedServices.push({
          serviceId: service.serviceId,
          name: service.name,
          price: service.price,
        });
      }


      appointment.services = updatedServices as any;
    }


    const updatedAppointment = await appointment.save();
    res.status(200).json(updatedAppointment);
  } catch (error) {
    next(error);
  }
};
