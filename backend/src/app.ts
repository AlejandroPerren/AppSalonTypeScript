import express, { NextFunction, Request, Response }  from "express";
import createHttpError, { isHttpError } from "http-errors";
import cors from "cors";
import routerAuth from "./routes/authRoutes"
import routerServices from "./routes/servicesRoutes";
import routerDates from "./routes/datesRoutes";
import morgan from "morgan"

const app = express();
app.use(express.json());
app.use(morgan("dev"))

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 
}

app.use("/api/auth", cors(corsOptions),routerAuth);
app.use("/api/services",cors(corsOptions),routerServices);
app.use("/api/dates",routerDates );

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});


// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
});


export default app;

