export async function getAllActiveSchedule() {
  const res = await fetch("/api/get-active-schedule");
  return (await res.json()).data;
}
