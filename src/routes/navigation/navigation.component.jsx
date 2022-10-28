import './navigation.style.css';

import NavLogo from '../../assets/logo.png';

import Button from '../../component/button/button.component';
import { BUTTON_TYPES } from '../../component/button/button.component';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navigate = () => {console.log('navigate to post')};

const Navigation = () => {
    const [isActive, setIsActive] = useState(false);
    
    return(
        <nav>
            <img className='nav-logo' src={NavLogo} alt='job board logo'/>
            
            <div className={`nav_list ${isActive ? 'active':''}`}>
                <Link className='sign-in' to='/'>log in</Link>    
                <Button onClick={navigate}>post a job</Button>
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