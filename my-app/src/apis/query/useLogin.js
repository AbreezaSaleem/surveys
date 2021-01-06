import axois from 'axios';
import { useQuery } from 'react-query';

export default function useLogin(values) {
  return useQuery('login', () => {
    axois.get('/login', values).then(res => res.data)
  })
}
