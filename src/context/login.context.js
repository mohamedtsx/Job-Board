import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();


export const LoginContextProvider = ({children}) => {
    const [loginActive, setLoginActive] = useState(false);
    const [loginPending, setLoginPending] = useState(false);
    const value = {loginActive, setLoginActive, loginPending, setLoginPending}
    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}


