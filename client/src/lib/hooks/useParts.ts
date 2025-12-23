import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router";
import agent from "../api/agent";

export const useParts = (id?: number) => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const partsQuery = useQuery({
    queryKey: ["parts"],
    queryFn: async () => {
      const response = await agent.get<Part[]>("/Parts");
      return response.data;
    },
    enabled: id === undefined && location.pathname === "/parts",
  });

  const partQuery = useQuery({
    queryKey: ["parts", id],
    queryFn: async () => {
      const response = await agent.get<Part>(`/Parts/${id}`);
      return response.data;
    },
    enabled: typeof id === "number",
  });

  const updatePartMutation = useMutation({
    mutationFn: async (part: Part) => {
      const response = await agent.put<Part>("/Parts", part);
      return response.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["parts"] });
      // (اختياري) تحديث part detail إذا مفتوح
      // await queryClient.invalidateQueries({ queryKey: ["parts", part.partID] });
    },
  });

  const createPartMutation = useMutation({
    mutationFn: async (part: CreatePartDto) => {
      const response = await agent.post<number>("/Parts", part);
      return response.data; // new id
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["parts"] });
    },
  });

  const deletePartMutation = useMutation({
    mutationFn: async (partID: number) => {
      await agent.delete(`/Parts/${partID}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["parts"] });
    },
  });

  return {
    parts: partsQuery.data,
    isPending: partsQuery.isPending,

    part: partQuery.data,
    isPartLoading: partQuery.isLoading,

    updatePartMutation,
    createPartMutation,
    deletePartMutation,
  };
};
