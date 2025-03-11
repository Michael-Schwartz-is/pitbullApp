import { session, userIteractionData } from "@/types/models";

export async function getAllFutureSessions(): Promise<{ sessions: session[] }> {
  const response = await fetch("/api/future-sessions");
  return response.json();
}

export async function addUserToTraining({ email, day, session }: userIteractionData) {
  const response = await fetch("/api/join-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, day, session }),
  });
  return response.json();
}

export async function deleteUserSession(id: string) {
  const response = await fetch("/api/join-session", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  return response.json();
}
