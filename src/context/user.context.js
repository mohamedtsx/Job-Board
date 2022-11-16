import { useState } from "react";
import { createContext } from "react";
import { onAuthChange } from "../util/firebase";


export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    onAuthChange((user) => setCurrentUser(user));
    
    const value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}