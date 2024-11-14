import { Schema, model, Types, InferSchemaType } from "mongoose";

const datesSchema = new Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  userId: { type: Types.ObjectId, ref: "User", required: true },
  services: [
    {
      serviceId: { type: Types.ObjectId, ref: "Service", required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ]
});

type Dates = InferSchemaType<typeof datesSchema>;
export default model<Dates>("Date", datesSchema);
