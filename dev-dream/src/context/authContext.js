import { createContext, useContext } from "react";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

const AuthProvider = ({ children }) => {
  const user = {
    login: true,
  };

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
