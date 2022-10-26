import './job.style.css';

import { useContext } from 'react';
import { JobContext } from '../../context/jobs.context';
import { useParams } from 'react-router-dom';


const Job = () => {
    const {jobs} = useContext(JobContext);
    const { id } = useParams();

    const job = jobs.find(el => `${el.id}` === id);
    

    return(
        <div className='job-header'>
            
        </div>
    )
}

export default Job;