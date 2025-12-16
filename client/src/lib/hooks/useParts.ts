import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import agent from "../api/agent";
import { useLocation } from "react-router";

export const useParts = (id?: number) => {
  const queryClient = useQueryClient();
  const location = useLocation();

  const { data: parts, isPending } = useQuery({
    queryKey: ["parts"],
    queryFn: async () => {
      const response = await agent.get<Part[]>("/Parts");
      return response.data;
    },
    enabled: !id && location.pathname === "/parts",//Loading bar
    //staleTime: 1000 * 60 * 5,
  });

  const { data: part, isLoading: isPartLoading } = useQuery({
    queryKey: ["parts", id],
    queryFn: async () => {
      if (id === undefined) return null;
      const response = await agent.get<Part>(`/Parts/${id}`);
      return response.data;
    },
    enabled: !!id,
  });

  const updatePartMutation = useMutation({
    mutationFn: async (part: Part) => {
      const response = await agent.put<Part>("/Parts", part);
      return response.data; // should be the created id if part
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
    deletePartMutation,
    part,
    isPartLoading,
  };
};
