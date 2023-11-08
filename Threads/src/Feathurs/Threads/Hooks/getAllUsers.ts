import { API } from '../../../libs/Api'
import { useQuery } from "@tanstack/react-query";


export const  useGetAllUsers = (search? : string | "") => {

    const { data: users, isLoading, refetch} = useQuery({
        queryFn: async () => {
            const dataUsers = await API.get(`/users?search=${search}`);
            return dataUsers.data   
        },
        queryKey: ['users'],
    });
  return {
    data: users,
    isLoading,
    refetch
  }
}
