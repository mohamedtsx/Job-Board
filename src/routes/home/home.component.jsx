import './home.style.css'
import HeroSection from '../../component/hero/hero.component';
import Jobs from '../../component/jobs/jobs.component';


const Home = () => {


    return(
        <div className='home'>
            {/* <div className='open'>
                <div className='layer'/>
                <div className='layer'/>
            </div> */}
            <HeroSection/>
            <Jobs/>
        </div>
    )
}

export default Home;

// contains a job and here section component 