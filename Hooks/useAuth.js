import axios from "axios"
import { deleteCookie } from "cookies-next"
import useAuthContext, { useLogin } from './useAuthContext'

const useAuth = () => {
  const { setAuthState } = useAuthContext();
  const {loginCard, setloginCard} = useLogin();

  const signin = async (data) => {
    setAuthState((prev) => ({
      ...prev,
      loading: true,
      error: null,
      data: null,
    }));
    try {
      const res = await axios.post("http://127.0.0.1:3000/api/auth/signin", {
        email: data.email,
        password: data.password,
      });
      setAuthState((prev) => ({
        ...prev,
        loading: false,
        error: null,
        data: res?.data
      }));
      if(res?.statusText==='OK'){setloginCard(false)}
    } catch (error) {
      console.log(error);
      setAuthState((prev) => ({
        ...prev,
        loading: false,
        error: error?.response?.data?.message,
        data: null,
      }));
    }
  };

  const signup = async (data) => {
    setAuthState((prev) => ({
      ...prev,
      loading: true,
      error: null,
      data: null,
    }));
    console.log(data.first_name)
    try {
      const res = await axios.post("http://127.0.0.1:3000/api/auth/signup", {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
      });
      setAuthState((prev) => ({
        ...prev,
        loading: false,
        error: null,
        data: res?.data
      }));
      console.log(res)
      if(res?.statusText==='OK'){setloginCard(false)}
    } catch (error) {
      console.log(error);
      setAuthState((prev) => ({
        ...prev,
        loading: false,
        error: error?.response?.data?.errorMessage,
        data: null,
      }));
    }
    
  };

  const logout = () => {
    deleteCookie('jwt')
    setAuthState((prev) => ({
      ...prev,
      loading: false,
      error: null,
      data: null,
    }));
  }

  return {
    signin,
    signup,
    logout
  };
}

export default useAuth;