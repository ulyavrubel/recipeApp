import React, { useEffect, useState } from "react";
import { appAuth } from "./FirebaseInit";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    appAuth.auth().onAuthStateChanged(setCurrentUser);
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories.map(item => item.strCategory));
      });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, categories }}>
      {children}
    </AuthContext.Provider>
  );
};
