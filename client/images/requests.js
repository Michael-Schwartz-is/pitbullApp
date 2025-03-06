import { useQuery } from "@tanstack/react-query";

export function useGetRandomImages() {
  return useQuery({
    queryKey: ["random-images"],
    queryFn: () => getRandomImage(),
  });
}

async function getRandomImage() {
  const response = await fetch("/api/random-image", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export function useGetRandomAvatar() {
  return useQuery({
    queryKey: ["random-avatar"],
    queryFn: () => getRandomAvatar(),
  });
}

async function getRandomAvatar() {
  const response = await fetch("/api/random-avatar", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
