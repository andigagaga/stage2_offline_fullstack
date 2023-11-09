import { useQuery } from "@tanstack/react-query"
import { API } from "../../../libs/Api"

export const useDetailThreads = (id: number) => {
    const {data: detailThreads, isLoading, refetch} = useQuery({
        queryFn: async () => {
            const dataDetailThreads = await API.get(`/thread/${id}`);
            return dataDetailThreads;
        },
        queryKey: ["threadsReplies"]
    });
    return {
        data: detailThreads,
        isLoading,
        refetch
    }
}