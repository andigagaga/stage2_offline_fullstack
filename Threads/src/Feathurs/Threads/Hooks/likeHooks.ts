/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from "../../../libs/Api"
import { useMutation } from "@tanstack/react-query"


export const useLike =   ({onSuccess, id}: any) => {
    return useMutation({
        mutationFn: async () => {
            await API.post(`/like/${id}`, "", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
        },
        onSuccess,
    })
}
