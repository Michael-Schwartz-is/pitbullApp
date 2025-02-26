import { getAllFutureSessions } from "@/api/sessions/requests";
import { useQuery } from "@tanstack/react-query";

export function useGetAllFeatureSessions() {
  return useQuery({
    queryKey: ["future-sessions"],
    queryFn: () => getAllFutureSessions(),
  });
}
