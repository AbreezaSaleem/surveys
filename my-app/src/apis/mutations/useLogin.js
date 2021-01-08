import axios from 'axios'
import { useMutation } from 'react-query'

export default function useDeletePost() {
  return useMutation(
    (values) => axios.post('/login', values),
    {
      onSuccess: (data, error, variables, context) => {
      localStorage.setItem('token', data.data)
        history.push("/")
      },
      onError: (error) => {
        const { response: { data: { message = '' } } } = error
        // setErrorMessage(message)
      },
    }
  )
}