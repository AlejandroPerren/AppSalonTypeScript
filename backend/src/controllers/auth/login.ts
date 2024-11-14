import { RequestHandler } from "express";
import createHttpError from "http-errors";
import userModel from "../../models/userModel";
import bcrypt from "bcrypt"

interface LoginBody {
    email?: string,
    password?: string,
}

export const login: RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        if (!email || !password) {
            throw createHttpError(400, "Parameters missing");
        }

        const user = await userModel.findOne({ email: email }).select("+password +email").exec();

        if (!user) {
            throw createHttpError(401, "Invalid credentials");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw createHttpError(401, "Invalid credentials");
        }

        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};