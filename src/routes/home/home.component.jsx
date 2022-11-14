// import './home.style.css'
import HeadSection from '../../component/header/header.component';
import Jobs from '../../component/jobs/jobs.component';
const Home = () => {
    return(
        <div className='home'>
            <div className='open'>
                <div className='layer'/>
                <div className='layer'/>
            </div>
            <HeadSection/>
            <Jobs/>
        </div>
    )
}

export default Home;

// contains a job and here section component 