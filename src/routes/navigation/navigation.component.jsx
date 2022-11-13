import './navigation.style.css';

import NavLogo from '../../assets/logo.png';

import Button from '../../component/button/button.component';
import { BUTTON_TYPES } from '../../component/button/button.component';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { LoginContext } from '../../context/login.context';




const Navigation = () => {
    const [isActive, setIsActive] = useState(false);
    const { loginActive, setLoginActive } = useContext(LoginContext)
    

    const postJobHandler = () => {
        // check current user if null do this
    
        // if there are a current user do this
        
        // requirements: learn how to create user profile
    };

    const toggleLoginHandler = () => {
        setLoginActive(!loginActive);
    }

    return(
        <nav>
            <Link to='/'>
                <img className='nav-logo' src={NavLogo} alt='job board logo'/>
            </Link>
            
            <div className={`nav_list ${isActive ? 'active':''}`}>

                <span type='button' className='login' onClick={toggleLoginHandler}>log in</span>

                <Button style={{padding: 0}}><Link to='post-job'>post a job</Link></Button>
            </div>
            
            <Button 
                buttonType={BUTTON_TYPES.dropdownBtn} 
                onClick={() => {setIsActive(!isActive)}}
                className={`${isActive ? 'active':''}`}
            >
                <span className="top"/>
                <span className="mid"/>
                <span className="bottom"/>
            </Button>
        </nav>
    )
}

export default Navigation;