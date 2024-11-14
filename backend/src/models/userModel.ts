import { InferSchemaType, model, Schema } from "mongoose";


const userSchema = new Schema ({
    "name": {type :String, required: true, unique: false},
    "lastname": {type :String, required: true, unique: false},
    "email": {type :String, required: true, unique: true},
    "password": {type :String, required: true, unique: false},
    "phone": {type :String, required: true, unique: false},
    "rol": { type: String, required: true,"default": "user" }
  })

type User = InferSchemaType<typeof userSchema>;
export default model<User>("User", userSchema);