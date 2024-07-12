
import { useState ,createContext} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{

    const[darkMode, SetDarkMode] =  useState(false);
    const swithDarkMode = ()=>{
        SetDarkMode(()=>!darkMode);
    }

    return(
        <ThemeContext.Provider value={{darkMode,swithDarkMode}}>
        {children}
        </ThemeContext.Provider>
    )
}

