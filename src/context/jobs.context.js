import { createContext, useEffect, useState } from "react";
import { getJob, getJobs } from "../api/get-endpoint.api";



export const JobContext = createContext()

let sayEnough = true;

export const JobContextProvider = ({children}) => {
    const [jobs, setJobs] = useState([]);
    const [total, setTotal] = useState(0);

    
    const value = {jobs,total, setJobs}

    useEffect(() => {
        if(sayEnough) {            
            const asyncFn = async () => {
                const { data } =  await getJobs(1);
                setJobs(data.data)
                setTotal(data.meta.total);
            }
            asyncFn();
            sayEnough = false;
        }
    }, []);
    

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}
