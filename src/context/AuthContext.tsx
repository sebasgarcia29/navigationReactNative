import React, { useReducer } from 'react';
import { createContext } from 'react';
import { authReducer } from '../reducers/authReducer';

// Se define como luce el estado global
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Lo usaremos para decirle a React como luce y que expone el contexto

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoritaIcon: (iconName: string) => void;
  logout: () => void;
  changeUsername: (username: string) => void;
}


// Crear contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente que es proveedor del estado

export const AuthProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: 'sigIn' });
  };

  const changeFavoritaIcon = (iconName: string) => {
    dispatch({ type: 'changeFavIcon', payload: iconName });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const changeUsername = (username: string) => {
    dispatch({ type: 'changeUsername', payload: username });
  };

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      changeFavoritaIcon,
      logout,
      changeUsername,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

