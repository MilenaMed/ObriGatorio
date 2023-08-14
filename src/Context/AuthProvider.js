import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const saveToken = (data) => {
    console.log("data", data)
    localStorage.setItem("token-access", data.token);
  };

  return (
    <AuthContext.Provider value={saveToken}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;