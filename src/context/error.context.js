import { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = ({children}) => {
    const [error, setError] = useState(null);
    const value = {error, setError};

    return (
        <ErrorContext.Provider value={value}>
            {children}
        </ErrorContext.Provider>
    );
}