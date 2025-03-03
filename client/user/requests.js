export async function getUserInfo() {
  const response = await fetch("/api/user-info");
  return response.json();
}
