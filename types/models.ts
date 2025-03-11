export type session = {
  _id: string;
  user_id: UserId;
  schedule_id: ScheduleId;
  name: string;
  signup_timestamp: string;
  date: string;
  day: string;
  __v: number;
};

export type UserId = {
  updated_image: string;
  _id: string;
  name: string;
  email: string;
  role: string;
  image: string;
  created_at: string;
  updated_at: string;
  __v: number;
};

export type ScheduleId = {
  _id: string;
  english_name: string;
  time: string;
  emoji: string;
  heb_name: string;
  day: string;
  active: boolean;
  __v: number;
};

export type userIteractionData = {
  email: string;
  day: string;
  session: string;
};

export type addUserToTrainingResponse = {
  message: string;
  success: boolean;
  response: null | {
    user_id: UserId;
    schedule_id: string;
    name: session;
    date: string;
    day: string;
    test: boolean;
  };
};
