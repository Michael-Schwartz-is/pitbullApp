import fs from "fs";
import Papa from "papaparse";
import { parseISO, getDay, addDays, format } from "date-fns";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function extractDay(dayNameString, timestamp) {
  if (!dayNameString) return daysOfWeek[getDay(timestamp) + 6];
  return daysOfWeek.find((day) => dayNameString.includes(day));
}

function extractSessionName(str) {
  const SessionNames = [
    "Advanced",
    "Basics",
    "Drills",
    "Functional",
    "Gi",
    "Kids",
    "MIX No Gi",
    "MMA",
    "Mobility",
    "Morning",
    "No Gi basics",
    "Noon",
    "Open Mat",
    "Wrestling",
    "Young",
  ];
  return SessionNames.find((sess) => str.includes(sess));
}

function findNextDay(timestamp, targetDay) {
  const date = parseISO(timestamp);
  const targetDayIndex = daysOfWeek.indexOf(targetDay);

  if (targetDayIndex === -1) {
    return format(timestamp, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
  }

  const currentDayIndex = getDay(date);
  const daysUntilNext = (targetDayIndex - currentDayIndex + 7) % 7 || 7;
  const nextDay = addDays(date, daysUntilNext);

  return format(nextDay, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
}
const sessions = [];
let count = 0;

const files = fs.readdirSync("./_dataMassage/csv");
files.map((file) =>
  parseSessionsToJson(fs.readFileSync(`./_dataMassage/csv/${file}`, "utf-8"), file)
);

function parseSessionsToJson(file, fileName) {
  const parsedCsv = Papa.parse(file);
  console.log(`Starting File ${fileName}`);

  for (let i = 1; i < parsedCsv.data.length; i++) {
    const row = parsedCsv.data[i];

    if (!row[0] || !row[4] || isNaN(new Date(row[4]).getTime())) {
      console.warn(`Skipping invalid or empty row at index ${i}`);
      continue;
    }

    const session = {
      user_email: row[6],
      day: extractDay(row[0], row[4]),
      session: extractSessionName(row[1]),
      signup_timestamp: row[4],
      session_date: findNextDay(row[4], extractDay(row[0])),
      user_name: row[2],
    };
    sessions.push(session);
    count++;
  }

  console.log(`---- finished File ${fileName}`);
  fs.writeFileSync("./_test.json", JSON.stringify(sessions, null, 2));
}
console.log(files);
console.log(`total items ${count}`);
