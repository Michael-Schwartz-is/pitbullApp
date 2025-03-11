import {
  addUserToTraining,
  deleteUserSession,
  getAllFutureSessions,
} from "@/client/sessions/requests";
import { addUserToTrainingResponse, session, userIteractionData } from "@/types/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAllFeatureSessions() {
  return useQuery({
    queryKey: ["future-sessions"],
    queryFn: () => getAllFutureSessions(),
  });
}

export function useAddUserToTraining(data: userIteractionData) {
  const queryClient = useQueryClient();

  return useMutation<addUserToTrainingResponse, Error, userIteractionData>({
    mutationKey: ["add-user-to-training"],
    mutationFn: (data) => addUserToTraining(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["future-sessions"],
      });
    },
  });
}

export function useDeleteUserSession() {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>({
    mutationKey: ["delete-user-session"],
    mutationFn: (id) => deleteUserSession(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["future-sessions"],
      });
    },
  });
}

async function getAllUserSessions(): Promise<session[]> {
  const response = await fetch("/api/profile");
  return (await response.json()).data;
}

export function useGetAllUserSessions() {
  return useQuery({
    queryKey: ["user-history"],
    queryFn: () => getAllUserSessions(),
  });
}
