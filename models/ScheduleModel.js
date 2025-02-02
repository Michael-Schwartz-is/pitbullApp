import { model, Schema, models } from "mongoose";
import { type } from "os";

const scheduleSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  //   default: () => new mongoose.Types.ObjectId().toString(),
  // },
  english_name: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  emoji: {
    type: String,
    default: "🥋",
    trim: true,
  },
  heb_name: {
    type: String,
    default: "",
    trim: true,
    unique: false,
  },
  day: {
    type: String,
    default: "Sunday",
    trim: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

//                          singular    schema         collection name
const ScheduleModel = models.schedule_item || model("schedule_item", scheduleSchema, "schedules");

export default ScheduleModel;

const schedule_names = [
  { english_name: "Morning", emoji: "🥋", heb_name: "אימון בוקר" },
  { english_name: "Drills", emoji: "🥋", heb_name: "דרילים" },
  { english_name: "Basics", emoji: "🥋", heb_name: "בסיס" },
  { english_name: "MMA", emoji: "🥊", heb_name: "אם אם אי" },
  { english_name: "Kids", emoji: "", heb_name: "ילדים" },
  { english_name: "Young", emoji: "", heb_name: "נוער" },
  { english_name: "No Gi basics", emoji: "👕", heb_name: "נו גי" },
  { english_name: "Gi", emoji: "🥋", heb_name: "ג יוג יטסו" },
  { english_name: "MIX No Gi", emoji: "👕", heb_name: "נו גי" },
  { english_name: "Morning", emoji: "👕", heb_name: "אימון בוקר" },
  { english_name: "Functional", emoji: "🏋🏽", heb_name: "אימון פונקציונלי" },
  { english_name: "Wrestling", emoji: "🤼", heb_name: "האבקות" },
  { english_name: "Noon", emoji: "🥋", heb_name: "אימון צהריים" },
  { english_name: "Advanced", emoji: "🥋", heb_name: "מתקדמים" },
  { english_name: "Open Mat", emoji: "", heb_name: "גלגולים מתקדמים" },
  { english_name: "Mobility", emoji: "🧘🏼", heb_name: "תנועה לגיוגיטסו" },
];

const schedules = [
  {
    day: "Sunday",
    activity: "אימון בוקר 🥋 Morning",
    english_name: "Morning",
    time: "08:00",
    id: "80879b9d-14bd-472a-87e2-f86eb9593783",
  },
  {
    day: "Sunday",
    activity: "דרילים 🥋 Drills",
    english_name: "Drills",
    time: "18:00",
    id: "e70a8485-974e-4b0b-9152-1512ca182d5e",
  },
  {
    day: "Sunday",
    activity: "בסיס 🥋 Basics",
    english_name: "Basics",
    time: "19:15",
    id: "b351dd49-fbcd-41e6-8854-57296239c472",
  },
  {
    day: "Sunday",
    activity: "אם.אם.אי MMA 🥊",
    english_name: "MMA",
    time: "20:15",
    id: "067be420-1eda-4f26-8645-fcc360b3c4b6",
  },
  {
    day: "Monday",
    activity: "ילדים Kids",
    english_name: "Kids",
    time: "17:00",
    id: "df1e248f-744d-4672-a6f4-7699fedee856",
  },
  {
    day: "Monday",
    activity: "האבקות Wrestling 🤼\u200d♂️",
    english_name: "Wrestling",
    time: "20:30",
    id: "77250249-8475-4f62-aff3-cab067f36875",
  },
  {
    day: "Monday",
    activity: "נוער Young",
    english_name: "Young",
    time: "18:00",
    id: "903ea6a2-72b8-49ce-841e-c61d11d24ee0",
  },
  {
    day: "Monday",
    activity: "נו גי No Gi 👕basics",
    english_name: "No Gi",
    time: "19:00",
    id: "1d6c8021-5436-495a-905a-5fb6bda9b001",
  },
  {
    day: "Monday",
    activity: "ג'יוג'יטסו 🥋 Gi",
    english_name: "Gi",
    time: "20:15",
    id: "da3cec02-f1a5-452b-8da3-186359817b6f",
  },
  {
    day: "Tuesday",
    activity: "אימון בוקר 🥋 Morning",
    english_name: "Morning",
    time: "08:00",
    id: "11c76a4d-1168-42ea-93de-e25dcaef5b8c",
  },
  {
    day: "Tuesday",
    activity: "אימון פונקציונלי 🏋🏽 Functional",
    english_name: "Functional",
    time: "19:15",
    id: "73eecb8a-392f-475c-880f-d31b7e4fc8a9",
  },
  {
    day: "Tuesday",
    activity: "ג'יוג'יטסו 🥋 Gi",
    english_name: "Gi",
    time: "20:15",
    id: "f4aabfaf-8939-43d6-8537-f765c7265f31",
  },
  {
    day: "Wednesday",
    activity: "ג'יוג'יטסו 🥋 Gi",
    english_name: "Gi",
    time: "18:30",
    id: "d1b4df12-0fbd-47fa-8c0a-06f460e6ee9f",
  },
  {
    day: "Wednesday",
    activity: "נו גי MIX No Gi 👕",
    english_name: "No Gi",
    time: "19:30",
    id: "d608a8fe-4735-4b17-90ce-9132ff01300d",
  },
  {
    day: "Wednesday",
    activity: "אימון בוקר Morning 👕",
    english_name: "Morning",
    time: "08:00",
    id: "37792f6e-8564-46c3-9190-e54a1cd86cb2",
  },
  {
    day: "Wednesday",
    activity: "האבקות Wrestling 🤼\u200d♂️",
    english_name: "Wrestling",
    time: "20:30",
    id: "77250249-8475-4f62-aff3-cab067f36875",
  },
  {
    day: "Thursday",
    activity: "אימון צהריים Noon 🥋",
    english_name: "Noon",
    time: "12:00",
    id: "91a8f900-5fe4-4ae7-9964-fc62dcc0215c",
  },
  {
    day: "Thursday",
    activity: "ילדים Kids",
    english_name: "Kids",
    time: "17:00",
    id: "0731c731-e00a-4986-855d-13debddd48ca",
  },
  {
    day: "Thursday",
    activity: "נוער Young",
    english_name: "Young",
    time: "18:00",
    id: "29e743d5-a536-4544-91e4-eb6d06993e52",
  },
  {
    day: "Thursday",
    activity: "בסיס 🥋 Basics",
    english_name: "Basics",
    time: "19:15",
    id: "fd0efdd9-7acb-4ffe-91d5-a3695970817d",
  },
  {
    day: "Thursday",
    activity: "מתקדמים 🥋 Advanced",
    english_name: "Gi Advanced",
    time: "20:15",
    id: "5ab70a6b-141c-4070-9b3a-4cb7bb946be8",
  },
  {
    day: "Friday",
    activity: "גלגולים מתקדמים Open Mat",
    english_name: "Open Mat",
    time: "11:00",
    id: "788ff3ba-bae2-48ef-87cd-7e254f1ed6b6",
  },
  {
    day: "Friday",
    activity: "תנועה לגיוגיטסו 🧘🏼\u200d♂️ Mobility",
    english_name: "Mobility",
    time: "12:00",
    id: "28d7a011-6a56-4ca1-9aa5-42722dd9fd26",
  },
  {
    day: "Saturday",
    activity: "האבקות Wrestling 🤼\u200d♂️",
    english_name: "Wrestling",
    time: "18:30",
    id: "46fe0e9c-7267-4c00-9acc-2a8ad6ec69b2",
  },
  {
    day: "Saturday",
    activity: "תנועה לגיוגיטסו 🧘🏼\u200d♂️ Mobility",
    english_name: "Mobility",
    time: "20:00",
    id: "ad9b3272-a18d-47f5-aa2a-db1f75b6de1e",
  },
];

schedules.forEach((sch, i) => {
  const names = schedule_names.find((schn) => sch.activity.includes(schn.english_name));
  schedules[i] = { ...sch, emoji: names.emoji, heb_name: names.heb_name };
});

export { schedules };
