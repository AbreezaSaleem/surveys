import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useMutation } from 'react-query'

export default function useRegister() {
  const history = useHistory();

  return useMutation(
    (values) => axios.post('/register', values),
    {
      onSuccess: (data, error, variables, context) => {
        localStorage.setItem('token', data.data)
        history.push("/")
      }
    }
  )
}