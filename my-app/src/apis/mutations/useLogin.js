import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useMutation } from 'react-query'

export default function useLogin() {
  const history = useHistory();

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