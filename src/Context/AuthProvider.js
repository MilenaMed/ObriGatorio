import React from "react";
import { AuthContext } from "./AuthContext.js";


export  default function AuthProvider({ children }) {
    const saveToken = (data) => {
      localStorage.setItem("token-access", data.token);
    };
  
    return (
      <AuthContext.Provider value={{ saveToken }}>
        {children}
      </AuthContext.Provider>
    );
  }