/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { fetchMe } from "../services/auth/Login";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
  userToken: JSON.parse(localStorage.getItem("userToken")) || null,
  userInfo: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "SET_USER_TOKEN":
      return { ...state, userToken: action.payload };
    case "SET_USER_INFO":
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [{ userInfo, userToken, darkMode }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const toggledarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };
  const setUserToken = (token) => {
    dispatch({ type: "SET_USER_TOKEN", payload: token });
  };

  const setUserInfo = (data) => {
    dispatch({ type: "SET_USER_INFO", payload: data });
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("userToken", JSON.stringify(userToken));
  }, [userToken]);

  useEffect(() => {
    async function getme() {
      try {
        const data = await fetchMe(userToken);
        setUserInfo(data);
      } catch (err) {
        console.error("error:", err);
      }
    }
    if (userToken) getme();
  }, [userToken]);
  return (
    <AppContext.Provider
      value={{
        userInfo,
        darkMode,
        userToken,
        toggledarkMode,
        setUserToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
