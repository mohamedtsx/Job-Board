import { 
    HeaderSt, Hero, HeroImage, HeroText
} from './header.style.jsx';

import Illustration  from '../../assets/hero-illustration.png';
import Button from '../button/button.component';

import { useContext } from 'react';
import { JobContext } from '../../context/jobs.context';


const Header = () => {

    const {jobs} = useContext(JobContext);

    return(
        <HeaderSt>
            <Hero>
                <HeroText>
                    <h4>{jobs.length}+ job listed</h4>
                    
                    <h1>Find your dream job</h1>
                    <p>
                        We provide online instant cash loans with quick approval that suit your term length
                    </p>
                    <a href='#list'>
                        <Button>start applying now</Button>
                    </a>
                </HeroText>
                <HeroImage src={Illustration} alt='hero'/>
            </Hero>
        </HeaderSt>
    )
}

export default Header;