import fs, { read } from "fs";

export const files = {
  users: "./app/api/dummy-data/users.json",
  sessions: "./app/api/dummy-data/sessions.json",
  schedule: "./app/api/dummy-data/schedule.json",
  bookings: "./app/api/dummy-data/bookings.json",
  pastSessions: "./_test.json",
};

export function readData(key) {
  return JSON.parse(fs.readFileSync(files[key], "utf-8"));
}

export const updateData = async (key, action) => {
  const currentData = readData(key);
  await action(currentData);
  writeData(currentData);
};

export const writeData = (key, newData) => {
  if (!newData) {
    throw new Error("You must pass newData to writeData");
  }

  if (!Array.isArray(newData)) {
    throw new Error("newData must be an array");
  }

  fs.writeFileSync(files[key], JSON.stringify(newData, null, 2));
};

/*
    Usage example, adding a user:

    updateData("users", currentUsers => {
        currentUsers.push(newUser)
    })
*/

export function getAttendeesByDayAndClass(day, className) {
  const sessions = readData("sessions");
  const classDay = sessions.find((s) => s.day === day);
  const attendees = classDay.sessions.find((s) => (s.class = className));
  return attendees;
}

export function getUserInfo(users) {
  const userList = readData("users");
  return users.map((u) => userList.find((user) => user.email === u));
}

// get days with trainings

export function getSessionsByday(day) {
  return readData("sessions").filter((session) => session.day === day);
  // readData("bookings").filter(booking.className === )

  // the problem here is that we need to a. add a _day to each booking b. add nextTainingDate based on the day.
  // filter bookings by day, and
}

export function getDaysWithTrainings() {
  const schedules = readData("schedule");
  const activeSchedules = schedules.filter((day) => {
    return day.sessions.some((sess) => sess.active);
  });
  return activeSchedules;
}

export function getUserSessionHistory(user) {
  const pastSessions = readData("pastSessions");
  return pastSessions.filter((session) => session.user_email === user);
}
export function getSessionInfo(day, name) {
  const allSessions = readData("schedule");
  return allSessions.day.find((session) => (session.name = name));

  // we dont need to refactor the session mechanism to store attendee submissions in a list.
  // we can then filter that list to get different slices:
  // 1. sessions with users that have not passed yet
  // 2. all past and future user sessions
}

// let doubles = map([1, 2, 3], (n) => {
//   return n * 2;
// });

// let triples = map([1, 2, 3], (n) => {
//   return n * 3;
// });

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// function map(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(callback(arr[i]));
//   }
//   return newArr;
// }

export function page() {
  return <div>fun</div>;
}
