/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from '@tanstack/react-query'
import { API } from '../../../libs/Api'
import { AxiosError } from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useThreadReplies = ({onSuccess, idThread} : any) => {
  return useMutation({
    mutationFn: async (body : {content: string}) => {
      await API.post(`/reply/${idThread}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    },
    onSuccess,
    onError: (error: unknown) => {
        let errorMessage = "Reply Error";
        if (error instanceof AxiosError) {
            if(error.response) {
                errorMessage = error.response.data.message.message
            } else {
                errorMessage = error.message;
            }
        }
    }
  })
}
