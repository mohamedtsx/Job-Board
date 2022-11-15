import './navigation.style.css';

import NavLogo from '../../assets/logo.png';

import Button from '../../component/button/button.component';
import { BUTTON_TYPES } from '../../component/button/button.component';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { LoginContext } from '../../context/login.context';



const Navigation = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const { loginActive, setLoginActive } = useContext(LoginContext)

    const toggleLoginHandler = () => {
        setLoginActive(!loginActive);
        setIsMenuActive(!isMenuActive);
    }

    return(
        <nav>
            <Link to='/'>
                <img className='nav-logo' src={NavLogo} alt='job board logo'/>
            </Link>
            
            <div className={`nav_list ${isMenuActive ? 'active':''}`}>
                <span type='button' className='login' onClick={toggleLoginHandler}>log in</span>
                <Link onClick={() => setIsMenuActive(!isMenuActive)} className='nav_post_job' to='post-job'>post a job</Link>
            </div>
            <Button 
                buttonType={BUTTON_TYPES.dropdownBtn} 
                onClick={() => {setIsMenuActive(!isMenuActive)}}
                className={`${isMenuActive ? 'active':''}`}
            >
                <span className="top"/>
                <span className="mid"/>
                <span className="bottom"/>
            </Button>
        </nav>
    )
}

export default Navigation;