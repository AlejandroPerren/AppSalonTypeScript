import "dotenv/config";
import app from './app';
import mongoose from "mongoose";
import env from "./utils/validateEnv";


const PORT = env.PORT || 4000 ;

mongoose.connect(env.MONGO_CONNECTION)
    .then(()=> {
        console.log("Conectado Al servidor de Mongoose");
        app.listen(PORT, ()=> {
            console.log("Servidor Ejecutandose en el Puerto", PORT)
        })


    })
    .catch(console.error);
