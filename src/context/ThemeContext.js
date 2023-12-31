// Theme Context


import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [myTheme, setMyTheme] = useState("light");
  const values = {myTheme,setMyTheme};

  return (
    <ThemeContext.Provider value={{ myTheme, setMyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
    return useContext(ThemeContext)
}

export default ThemeContextProvider;