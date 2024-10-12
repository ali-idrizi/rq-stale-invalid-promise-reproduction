import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import Search from "./Search";

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            experimental_prefetchInRender: true,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Search />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
