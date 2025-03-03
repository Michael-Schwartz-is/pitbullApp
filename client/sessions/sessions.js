import {
  addUserToTraining,
  getAllFutureSessions,
  GetAllUserSessions,
} from "@/client/sessions/requests";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAllFeatureSessions() {
  return useQuery({
    queryKey: ["future-sessions"],
    queryFn: () => getAllFutureSessions(),
  });
}

export function useAddUserToTraining() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["add-user-to-training"],
    mutationFn: (data) => addUserToTraining(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["future-sessions"],
      });
    },
  });
}

async function test() {
  const response = await fetch("/api/profile");
  return (await response.json()).data;
}

export function useGetAllUserSessions() {
  return useQuery({
    queryKey: ["user-history"],
    queryFn: () => test(),
  });
}
