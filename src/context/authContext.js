import React from 'react';
import axios from '../axios';

export const AuthContext = React.createContext();

// get current user
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem('user') || null)
  );

  const login = async (inputs) => {
    const { data } = await axios.post(`/auth/login`, inputs);
    setCurrentUser(data);
  };

  const logout = async () => {
    await axios.post(`/auth/logout`);
    setCurrentUser(null);
  };

  React.useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
