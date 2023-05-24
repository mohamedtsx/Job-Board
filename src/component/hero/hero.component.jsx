import { 
    HeadSectionSt, Hero, HeroImage, HeroText
} from './hero.style.jsx';

import './hero.animation.css';

import Illustration  from '../../assets/hero-illustration.png';
import Button from '../button/button.component';

import { useContext } from 'react';
import { JobContext } from '../../context/jobs.context';


const HeroSection = () => {

    const { meta} = useContext(JobContext);

    return(
        <HeadSectionSt>
            <Hero>
                <HeroText className='hero-text'>
                    <h4>{meta.total ? meta.total : '...'}+ job listed</h4>
                    
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

export default HeroSection;