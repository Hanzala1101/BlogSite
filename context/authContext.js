'use client'
import { createContext, useState, useEffect } from 'react'
import { getCookie } from 'cookies-next'

export const AuthenticationContext = createContext({
  loading: false,
  data: null,
  isFetchingUser: true,
  error: null,
  setAuthState: () => { }

})

export default function AuthContext({ children }) {
  const [authState, setAuthState] = useState({
    loading: false,
    data: null,
    isFetchingUser: true,
    error: null
  })

  const fetchUser = async () => {
    setAuthState((prev) => ({ ...prev, isFetchingUser: true }));

    try {
      const jwt = getCookie("jwt");

      if (!jwt) {
        setAuthState((prev) => ({ ...prev, isFetchingUser: false, data: null }));
      } else {
        const response = await axios.get("http://127.0.0.1:3000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        console.log(response);

        axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

        setAuthState((prev) => ({
          ...prev,
          isFetchingUser: false,
          data: response?.data,
        }));
      }
    } catch (error) {
      console.log(error);
      setAuthState((prev) => ({ ...prev, isFetchingUser: false, data: null }));
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
