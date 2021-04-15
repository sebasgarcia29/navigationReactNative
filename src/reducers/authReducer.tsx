import { AuthState } from '../context/AuthContext';

type AuthAction =
  | { type: 'sigIn' }
  | { type: 'changeFavIcon', payload: string }
  | { type: 'logout' }
  | { type: 'changeUsername', payload: string };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'sigIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };
    case 'changeUsername':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
