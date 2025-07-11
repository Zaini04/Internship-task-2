import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) setUser(storedUser);
  }, []);

 const signUp = ({ email, phone, password, fName, lName }) => {
  const newUser = { email, phone, password, fName, lName };
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const alreadyExists = users.find(
    (u) => u.email === email || u.phone === phone
  );
  if (alreadyExists) {
    return { success: false, message: "User already exists" };
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  console.log("Signing up new user:", newUser);

  setUser(newUser);
  return { success: true };
};

const Login = ({ email, phone, password }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (u) =>
      ((email && u.email === email) || (phone && u.phone === phone)) &&
      u.password === password
  );

  if (foundUser) {
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    console.log("Logging in user:", foundUser);
    setUser(foundUser);
    return { success: true };
  }

  return { success: false };
};

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ signUp, Login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
