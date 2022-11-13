import './job.style.css';
import React from 'react';

// ----------------------
import { Info } from '../../component/job-item/job-item.style';
import { JobItemSt } from '../../component/job-item/job-item.style';
// ----------------------

import { useContext } from 'react';
import { JobContext } from '../../context/jobs.context';
import { useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found.component';

// import { parse } from 'dom-parser-react';


const Job = () => {


    const {jobs} = useContext(JobContext);

    let { id } = useParams();
    
    const job = jobs.find(el => el.id === +id);
    
    if(!job) {
        return <NotFound/>;
    }


    let {
        company_email,company_logo,
        company_name,created_at,
        description,location,
        salary,title,type,vacancy
    } = job;
    type = type === 1 ? 'full time' : 'part time';
    created_at = new Date(`${created_at}`).toLocaleDateString();

    // const content = parse(description,{
    //     createElement:  React.createElement,
    //     Fragment: React.Fragment
    // });



    return(
        <>
            <div className='job-header'>
                <div className='job-header_text'>
                    <h1>{title}</h1>
                    <h2>{company_name}</h2>
                </div>
            </div>
            <main className='job-container'>
                <div className='job-content'>
                    <div className='job-content_main'>
                        <section className='job_preview'>
                            <JobItemSt>
                                <Info>
                                    <img src={company_logo} alt={`${company_name} logo`}></img>
                                    <div className='text-container'>
                                        <h1>{title}</h1>
                                        <div className='highlights'>
                                            <span>{company_name}</span>
                                            <span>{location}</span>
                                            <span>{type}</span>
                                        </div>
                                    </div>
                                </Info>
                            </JobItemSt>
                        </section>
                        <section className='job_description'>
                            <div dangerouslySetInnerHTML={{__html: description}}/>
                        </section>
                    </div>

                    <aside className='job_summary'>
                        <h1>job summary</h1>
                        <ul className='summary_pointes'>
                            <li><span className='li-gray'>published: </span>{created_at}</li>
                            <li><span className='li-gray'>vacancy: </span>{vacancy}</li>
                            <li><span className='li-gray'>salary: </span>{salary}</li>
                            <li><span className='li-gray'>location: </span>{location}</li>
                            <li><span className='li-gray'>job nature: </span>{type}</li>
                        </ul>
                    </aside>
                    <section className='job_apply'>
                        <h1>apply for the job</h1>
                        <span>Send your CV to our email at: <a href={`mailto:${company_email}`}>{company_email}</a></span>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Job;