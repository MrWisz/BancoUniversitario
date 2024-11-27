import React, { createContext, useEffect, useState, useReducer } from 'react';
import { setSession, clearSession } from '../services/jwt';
import { SESSION_KEY } from '../constants/Session';
import { AuthContextInterface } from '../interfaces/AuthContext.Interface';

/**
 * @type {React.Context<AuthContextInterface.IAuthContextType>}
 */
export const AuthContext = createContext({});

/**
 * @type {AuthContextInterface.IAuthState}
 */
const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

/**
 * @param {AuthContextInterface.IAuthState} state
 * @param {AuthContextInterface.IAuthAction} action
 * @returns {AuthContextInterface.IAuthState}
 */
const stateReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INITIALIZE': {
      const { isAuthenticated, user } = payload;
      return {
        ...state,
        isInitialized: true,
        isAuthenticated,
        user,
      };
    }

    case 'LOGIN': {
      const { user } = payload;
      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }

    default:
      return state;
  }
};

/**
 * @param {AuthContextInterface.IAuthProviderProps} props
 * @returns {JSX.Element}
 */
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        const [ID_KEY, TOKEN_KEY] = SESSION_KEY;

        const accessID = localStorage.getItem(ID_KEY);
        const accessToken = localStorage.getItem(TOKEN_KEY);

        if (!accessID || !accessToken) {
          clearSession();
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isInitialized: true,
              isAuthenticated: false,
              user: null,
            },
          });
          return;
        }

        setSession({ id: accessID, token: accessToken });

        dispatch({
          type: 'INITIALIZE',
          payload: {
            isInitialized: true,
            isAuthenticated: true,
            user: {
              id: accessID,
              token: accessToken,
            },
          },
        });

        setAuthInitialized(true);
      } catch (error) {
        clearSession();
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isInitialized: true,
            isAuthenticated: false,
            user: null,
          },
        });

        setAuthInitialized(true);
      }
    };

    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};