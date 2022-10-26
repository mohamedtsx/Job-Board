import './header.style.css';
import Illustration  from '../../assets/hero-illustration.png';
import Button from '../button/button.component';

const Header = () => {
    return(
        <header className='home-header'>
            <section className='hero'>
                <div className='hero_text'>
                    <h4>999+ job listed</h4>
                    <h1>Find your dream job</h1>
                    <p>
                        We provide online instant cash loans with quick approval that suit your term length
                    </p>
                    <Button>start applying now</Button>
                </div>
                <div className='hero-image'>
                    <img src={Illustration} alt='hero'/>
                </div>
            </section>
        </header>
    )
}

export default Header;