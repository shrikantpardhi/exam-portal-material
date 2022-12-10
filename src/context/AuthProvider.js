import React, { createContext, useState } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const persistCookies = useCookies(["persist"]);
  const [persist, setPersist] = useState(persistCookies.persist || false);
  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
