import { createContext, useEffect, useReducer } from "react";
const initialState = {
  token: localStorage.getItem("token") || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        token: null,
      };
    case "LOGIN_SUCCESS":
      return {
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        token: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.token) {
      localStorage.setItem("token", state.token);
    } else {
      localStorage.removeItem("token");
    }
  }, [state]);

  return (
    <authContext.Provider
      value={{
        token: state.token,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
