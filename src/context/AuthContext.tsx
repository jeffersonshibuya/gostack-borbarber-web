import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SinginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SinginCredentials): Promise<void>;
}

interface SigninData {
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: SigninData) => {
    const response = await api.post('/sessions', { email, password });
    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Jefferson', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
