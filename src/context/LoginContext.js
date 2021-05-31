import {createContext, useState} from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    console.log("input: ", input);
    setPassword(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    if (password !== "123") {
      console.log("wrong password");
    }
    localStorage.setItem("password", password);
    setIsAuthenticated(true);
    setPassword("");
  };

  return (
    <LoginContext.Provider
      value={{
        password,
        setPassword,
        isAuthenticated,
        setIsAuthenticated,
        handleChange: handleChange,
        handleSubmit: handleSubmit,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
