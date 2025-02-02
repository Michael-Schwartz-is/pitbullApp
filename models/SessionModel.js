import { model, Schema, models } from "mongoose";

const sessionSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  schedule_id: {
    type: Schema.Types.ObjectId,
    ref: "schedule_item",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  signup_timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  date: {
    type: Date,
    required: true,
  },
  day: {
    type: String,
    required: true,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
});

//                          singular    schema         collection name
const SessionModel = models.session || model("session", sessionSchema, "sessions");

/*
    SessionModel.findOne()
    SessionModel.findOneAndUpdate()
    SessionModel.find()
    SessionModel.findOneAndDelete()
    https://mongoosejs.com/docs/models.html

    SessionModel.create({
        user_email: "a@a.a",
        sesion_day..
    })
*/

export default SessionModel;
