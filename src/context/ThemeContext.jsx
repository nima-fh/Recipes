import { createContext, useReducer } from "react";
export const ThemeContext = createContext();
const ThemeReduser = (state, action) => {
  switch (action.type) {
    case "CHANGE-COLOR":
      return { ...state, color: action.payload };

    default:
      break;
  }
};
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(ThemeReduser, {
    color: "#0f172a",
    mode: "dark",
  });
  const changeColor = (color) => {
    dispatch({ type: "CHANGE-COLOR", payload: color });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
