export async function getAllFutureSessions() {
  const response = await fetch("/api/future-sessions");
  return response.json();
}

export async function addUserToTraining({ email, day, session }) {
  const response = await fetch("/api/join-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, day, session }),
  });
  return response.json();
}

export async function deleteUserSession({ id }) {
  const response = await fetch("/api/join-session", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  return response.json();
}

// Axios axiosInstance.delete('/api/...', {body:{id}})

export async function GetAllUserSessions({ email }) {
  const response = await fetch("/api/history", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  return response.json();
}
