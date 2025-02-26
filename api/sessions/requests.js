export async function getAllFutureSessions() {
  const response = await fetch("/api/future-sessions");
  return response.json();
}
