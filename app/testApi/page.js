"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

function saveData(name, email) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);

  return fetch("/api/schedule", {
    method: "POST",
    body: formData,
  });
}

function page() {
  const fetchPosts = async () => {
    const response = await fetch("/api/schedule");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"], // Unique key for this query
    queryFn: fetchPosts, // Function to fetch data
  });

  console.log(data);

  // const queryClient = useQueryClient();

  const saveDataMutation = useMutation({
    mutationFn: (user) => saveData(user.name, user.email),
    onError: (error) => console.error(error),
    onSuccess: async (result) => {
      const r = await result.json();
      console.table(r);

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  function testAction() {
    saveDataMutation.mutate({ name: "Alexei", email: "alexei@gmail.com" });
  }

  return (
    <div>
      <button onClick={() => testAction()}>Schedule</button>
    </div>
  );
}

export default page;
