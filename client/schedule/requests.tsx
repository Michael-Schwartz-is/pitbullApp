type Schedule = {
  _id: string;
  english_name: string;
  time: string;
  emoji: string;
  heb_name: string;
  day: string;
  active: Boolean;
  __v: number;
};

type ScheduleResponse = {
  data: Schedule[];
  req: {
    auth: {
      user: {
        name: string;
        email: string;
      };
      expires: Date;
    };
  };
};

export async function getAllActiveSchedule(): Promise<Schedule[]> {
  const res = await fetch("/api/get-active-schedule");
  return (await res.json()).data;
}
