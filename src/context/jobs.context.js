import { createContext, useEffect, useState } from "react";
import fetchEndpoint from "../api/endpoint.api";

export const JobContext = createContext()

let sayEnough = true;

export const JobContextProvider = ({children}) => {
    const [jobs, setJobs] = useState([]);
    const value = {jobs, setJobs}

    useEffect(() => {
        if(sayEnough) {
            fetchEndpoint('jobs', setJobs);
            sayEnough = false;
        }
    }, []);

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}
