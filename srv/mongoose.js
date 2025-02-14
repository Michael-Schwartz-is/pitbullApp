let user = await UserModel.findOne({ username: "Doug" });
let admins = await UserModel.find({ admin: true });
let allUsers = await UserModel.find({});

//                                      where (filter)                  update
await UserModel.findOneAndUpdate({ username: "Michael", email: "" }, { admin: true });

// find all sessions that match day and session name that the session_date has not passed yet
let seniors = UserModel.find({ $gte: { age: 55 } });
const futureSessions = SessionModel.find({
  $gt: { date: new Date() },
  name: "GI",
  day: day,
});
