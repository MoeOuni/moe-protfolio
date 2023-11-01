import { useState } from "react";
import AppContext from "./AppContext";

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
