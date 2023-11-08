import { useQuery } from "@tanstack/react-query"
import { API } from "../../../libs/Api"

export default function useUsers() {
    const { data: sugestedUsers, refetch } = useQuery({

        queryKey: ["getUser"],
		queryFn: async () => await API.get("/user")
        .then((res) => res.data)

	})

    // const { data: DataUsers } = useQuery({

    //     queryKey: ["allUsers"],
	// 	queryFn: async () => await API.get("/users")
    //     .then((res) => res.data)

	// })

    return {
        sugestedUsers,
        refetch,
        
    }

}
