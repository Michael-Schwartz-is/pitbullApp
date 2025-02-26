"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

function ReactQueryProvider({ children }) {
  const queryClient = new QueryClient();

  const [client] = useState(queryClient);

  return (
    <QueryClientProvider client={client}>
      {children}
      {true && <ReactQueryDevtools initialIsOpen={true} buttonPosition="bottom-left" />}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
