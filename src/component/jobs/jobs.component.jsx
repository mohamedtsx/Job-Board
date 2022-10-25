import JobItem from "../job-item/job-item.component";

const Jobs = () => {
    return(
        <section id="list" className="jobs">
            <h2>job listing</h2>
            {
                ['one','two','three'].map(job => (<JobItem key={job} item={job}/>))
            }
        </section>
    );
}

export default Jobs;