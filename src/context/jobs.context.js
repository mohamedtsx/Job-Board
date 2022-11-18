import { createContext, useEffect, useState } from "react";
import { getJob, getJobs } from "../api/get-endpoint.api";



export const JobContext = createContext()

let sayEnough = true;

export const JobContextProvider = ({children}) => {
    const [jobs, setJobs] = useState([]);
    const [meta, setMeta] = useState(0);
    const value = {jobs,meta, setJobs}

    useEffect(() => {
        if(sayEnough) {            
            const asyncFn = async () => {
                const { data } =  await getJobs(1);
                setJobs(data.data);
                setMeta(data.meta);
            }
            asyncFn();
            sayEnough = false;
        }
    }, []);
    

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}
