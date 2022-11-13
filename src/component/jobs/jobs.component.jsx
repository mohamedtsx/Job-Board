import './jobs.style.css';

import JobItem from "../job-item/job-item.component";

import { useContext } from "react";
import { JobContext } from '../../context/jobs.context';



const Jobs = () => {
    const { jobs } = useContext(JobContext);


    return(
        <section id="list" className="jobs">
            <h2>jobs listing</h2>
            {
                jobs.map(job => (<JobItem key={job.id} item={job}/>)) 
            }
        </section>
    );
}

export default Jobs;