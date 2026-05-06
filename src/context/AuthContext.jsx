import { createContext, useState } from "react";
 
export const AuthContext = createContext();
 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("email") || null );
 
  const login = (email, password) => {
    if (email === "movie@demo.com" && password === "cine123") {
      localStorage.setItem("email", email);
      setUser("email");
      return true;
    }
    return false;
  };
 
  const logout = () => {
    localStorage.removeItem("email");
    setUser(null);
  };
 
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 