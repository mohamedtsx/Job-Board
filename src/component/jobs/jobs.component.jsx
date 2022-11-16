import './jobs.style.css';

import JobItem from "../job-item/job-item.component";
import Loading from '../../component/loading/loading.component';

import { useContext } from "react";
import { JobContext } from '../../context/jobs.context';

import { getJobs } from '../../api/get-endpoint.api';


let lastActive;
const Jobs = () => {
    const { jobs, meta, setJobs } = useContext(JobContext);

    const goToPage = async (e) => {
        const { data } =  await getJobs(e.target.id);
        
        setJobs(data.data);
        if(lastActive) {
            lastActive.classList.remove('active');
        }
        e.target.classList.add('active')
        lastActive = e.target;
    }
    const { total, per_page} = meta;
    const pagesNumber = total ?  Math.ceil(total / per_page) : 0;


    return(
        <section id="list" className="jobs">
            <h2>jobs listing</h2>
            
            {
                !jobs ? <Loading/> : jobs.map(job => (<JobItem key={job.id} item={job}/>))
            }
            
            <div className='pagination'>
            
                {
                    [...Array(pagesNumber)].map((_,index) => {
                        return <div key={index} id={index + 1} onClick={goToPage}>{index + 1}</div>
                    })
                }
            </div>

        </section>
    );
}

export default Jobs;