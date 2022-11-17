import { useEffect, useState } from "react";
import { createContext } from "react";
import { onAuthChange } from "../util/firebase";


export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsubscribe =  onAuthChange((user) => setCurrentUser(user));
        return unsubscribe;
    }, []);
    
    
    const value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}