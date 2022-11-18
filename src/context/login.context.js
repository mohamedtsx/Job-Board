import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();


export const LoginContextProvider = ({children}) => {
    const [loginActive, setLoginActive] = useState(false);
    const value = {loginActive, setLoginActive}
    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}


