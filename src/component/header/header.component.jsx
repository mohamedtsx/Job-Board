import { 
    HeadSectionSt, Hero, HeroImage, HeroText
} from './header.style.jsx';

import './temp-style.css';

import Illustration  from '../../assets/hero-illustration.png';
import Button from '../button/button.component';

import { useContext } from 'react';
import { JobContext } from '../../context/jobs.context';


const HeadSection = () => {

    const {jobs} = useContext(JobContext);

    return(
        <HeadSectionSt>
            <Hero>
                <HeroText className='hero-text'>
                    <h4>{jobs.length}+ job listed</h4>
                    
                    <h1>Find your dream job</h1>
                    <p>
                        We provide online instant cash loans with quick approval that suit your term length
                    </p>
                    <a href='#list'>
                        <Button className='start-apply'>start applying now</Button>
                    </a>
                </HeroText>
                <HeroImage className='hero-image' src={Illustration} alt='hero'/>
            </Hero>
        </HeadSectionSt>
    )
}

export default HeadSection;