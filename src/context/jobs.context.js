import { createContext, useEffect, useState } from "react";
import { getJob, getJobs } from "../api/get-endpoint.api";
import { useContext } from "react";
import { ErrorContext } from "./error.context";


export const JobContext = createContext()

let sayEnough = true;

export const JobContextProvider = ({children}) => {
    const [jobs, setJobs] = useState([]);
    const [meta, setMeta] = useState(0);
    const value = {jobs,meta, setJobs}
    
    const { setError } = useContext(ErrorContext);
    

    useEffect(() => {
        if(sayEnough) {            
            const asyncFn = async () => {
                try {
                    const { data } =  await getJobs(1);
                    setJobs(data.data);
                    setMeta(data.meta);
                } catch(error) {
                    setError(error);
                }
            }
            asyncFn();
            sayEnough = false;
        }
    }, []);
    

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}
