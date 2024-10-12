import { useQuery } from "@tanstack/react-query";

export const getData = async (q) => {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return { q };
};

export const useData = (q) => {
  return useQuery({
    queryKey: [q],
    queryFn: () => getData(q),
    staleTime: 10000,
    gcTime: 10000,
  });
};
