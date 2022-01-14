import React from "react";
import { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState({ name: "luis", role: "admin" });
  const [user, setUser] = useState(null);
  const history = useHistory();

  const updateUser = (data) => {
    setUser({ ...user, ...data });
  };

  const login = (userCredentials, fromLocation) => {
    setUser({ userCredentials });
  };

  const logout = () => setUser(null);
  const isLogged = () => !!user;
  const hasRole = (role) => role && user?.role === role;

  const contextValue = {
    user,
    updateUser,
    isLogged,
    hasRole,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
