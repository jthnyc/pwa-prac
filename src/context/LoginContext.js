import {createContext, useState} from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        password,
        setPassword,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
