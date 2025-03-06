import { useQuery } from "@tanstack/react-query";
import { getAllActiveSchedule } from "./requests";

export function useGetActiveSchedule(day) {
  return useQuery({
    queryKey: ["schedule"],
    queryFn: () => getAllActiveSchedule(),
    select: (allItems) => allItems.filter((item) => item.day === day),
  });
}

export function useUpdateSchedule() {
  return useQuery({
    queryKey: ["update-schedule"],
    queryFn: () => updateSchedule(),
  });
}
