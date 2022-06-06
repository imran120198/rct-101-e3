import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (email, password) => {};

  const handleLogout = () => {};
  const value = { handleLogin, handleLogout, token };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
