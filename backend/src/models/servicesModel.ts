import { InferSchemaType, model, Schema } from "mongoose";

const servicesSchema = new Schema({
    "name": {type :String, required: true, unique: true},
    "price": {type :Number,required: true, unique: true},
  })

  type services = InferSchemaType<typeof servicesSchema>;

  export default model<services>("Services", servicesSchema);