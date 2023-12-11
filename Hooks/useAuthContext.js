import { AuthenticationContext } from '@/context/authContext'
import { logincontext } from '@/global/logincon'
import { useContext } from 'react'

export default function useAuthContext() {
  const { loading, data, error, setAuthState } = useContext(AuthenticationContext)
  return { loading, data, error, setAuthState }
}

export function useLogin(){
  const {loginCard, setloginCard} =useContext(logincontext)
  return {loginCard, setloginCard}
}