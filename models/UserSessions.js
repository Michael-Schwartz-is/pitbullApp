import mongoose, { Schema, model, models } from "mongoose";

const GymSessionSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  sessionDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default models.GymSession || model("GymSession", GymSessionSchema);
