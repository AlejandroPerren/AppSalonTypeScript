import { RequestHandler } from "express";
import createHttpError from "http-errors";
import userModel from "../../models/userModel";
import bcrypt from "bcrypt"

interface SignUpBody{
    name?: string,
    lastname?:string,
    email?:string,
    password?:string,
    phone?:string,
}

export const signUp: RequestHandler<unknown, unknown, SignUpBody, unknown> = async(req, res, next)=> {
  const {name, lastname, email, phone} = req.body
   const passwordRaw = req.body.password;
    try {
      if(!name || !lastname || !email || !phone || !passwordRaw){
        throw createHttpError(400, "Todos los parametros son necesarios");
      };
      const existingEmail = await userModel.findOne({email : email});

      if(existingEmail){
        throw createHttpError(409, "Este Email Ya esta registrado")
      };
      const passwordHashed = await bcrypt.hash(passwordRaw, 10);

      const newUser = await userModel.create({
        name: name,
        lastname: lastname,
        email: email,
        password: passwordHashed,
        phone: phone,
      })

      res.status(201).json(newUser)

    } catch (error) {
        next(error);
    }
}