import './navigation.style.css';

import NavLogo from '../../assets/logo.png';

// import Button from '../../component/button/button.component';
// import { BUTTON_TYPES } from '../../component/button/button.component';
import { Link } from 'react-router-dom';


import { useContext } from 'react';
import { LoginContext } from '../../context/login.context';
import { UserContext } from '../../context/user.context';
import { signOutAuth } from '../../util/firebase';



const Navigation = () => {
    const { loginActive, setLoginActive } = useContext(LoginContext)
    const { currentUser } = useContext(UserContext)

    const toggleLoginHandler = async () => {
        if(!currentUser) {
            setLoginActive(!loginActive);
        } else {
            await signOutAuth();
        }
    }



    return(
        <nav>
            <Link to='/'>
                <img className='nav-logo' src={NavLogo} alt='job board logo'/>
            </Link>
            
            <div className='nav_list'>
                <span type='button' className='login' onClick={toggleLoginHandler}>
                    {currentUser ? 'logout' :'login'}
                </span>
                <Link className='nav_post_job' to='post-job'>post a job</Link>
            </div>
            {/* <Button 
                buttonType={BUTTON_TYPES.dropdownBtn} 
                onClick={() => {setIsMenuActive(!isMenuActive)}}
            >
                <span className="top"/>
                <span className="mid"/>
                <span className="bottom"/>
            </Button> */}
        </nav>
    )
}

export default Navigation;