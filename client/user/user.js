import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "./requests";

export function useGetUserInfo() {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: () => getUserInfo(),
  });
}
