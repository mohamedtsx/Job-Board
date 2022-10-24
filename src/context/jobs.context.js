import { createContext, useEffect, useState } from "react";

export const JobContext = createContext()

export const JobContextProvider = ({children}) => {
    const [jobs, setJobs] = useState([]);
    const value = {jobs, setJobs}

    useEffect(() => {
        getJobsList();
    }, []);

    const getJobsList = async () => {
        const response = await fetch("https://gdsc-job-app.herokuapp.com/api/jobs");
        const data = await response.json();
        setJobs(data);
    }
    
    return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

/*
{
    "data": [
        {
            "company_email": "test@test.com",
            "company_logo": "https://ucarecdn.com/3ec2e65c-b1a5-4961-8dbd-c921572e4a95/",
            "company_name": "Google",
            "created_at": "2022-10-22T19:54:02.995021+00:00",
            "description": "<h1>test</h1><p>test</p>&lt;div&gt;test&lt;/div&gt;",
            "id": 1,
            "location": "USA",
            "salary": "80 - 150k",
            "title": "Software Engineer",
            "type": 1,
            "vacancy": 3
        },
        {
            "company_email": "test@test.com",
            "company_logo": "https://ucarecdn.com/3ec2e65c-b1a5-4961-8dbd-c921572e4a95/",
            "company_name": "Google",
            "created_at": "2022-10-22T19:54:02.995092+00:00",
            "description": "<h1>test</h1><p>test</p>&lt;div&gt;test&lt;/div&gt;",
            "id": 2,
            "location": "USA",
            "salary": "80 - 150k",
            "title": "Software Engineer",
            "type": 1,
            "vacancy": 3
        },
        {
            "company_email": "test@test.com",
            "company_logo": "https://ucarecdn.com/3ec2e65c-b1a5-4961-8dbd-c921572e4a95/",
            "company_name": "Google",
            "created_at": "2022-10-22T19:54:02.995021+00:00",
            "description": "<h1>test</h1><p>test</p>&lt;div&gt;test&lt;/div&gt;",
            "id": 3,
            "location": "USA",
            "salary": "80 - 150k",
            "title": "Software Engineer",
            "type": 1,
            "vacancy": 3
        }
    ],
    "meta": {
        "current_page": 1,
        "per_page": 15,
        "total": 3
    }
}
*/