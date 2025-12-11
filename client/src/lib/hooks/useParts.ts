import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import agent from "../api/agent";

export const useParts = () => {
  const queryClient = useQueryClient();

  const { data: parts, isPending } = useQuery({
    queryKey: ["parts"],
    queryFn: async () => {
      const response = await agent.get<Part[]>("/Parts");
      return response.data;
    },
  });

  const updatePartMutation = useMutation({
    mutationFn: async (part: Part) => {
      await agent.put<Part>("/Parts", part);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["parts"],
      });
    },
  });

  const createPartMutation = useMutation({
    mutationFn: async (part: Part) => {
      // API عندك بيرجع int (الـ PartID الجديد)
      const response = await agent.post<number>("parts", part);
      return response.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["parts"] });
    },
  });

  const deletePartMutation = useMutation({
    mutationFn: async (partID: number) => {
      await agent.delete(`parts/${partID}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["parts"] });
    },
  });

  return {
    parts,
    isPending,
    updatePartMutation,
    createPartMutation,
    deletePartMutation
  };
};
