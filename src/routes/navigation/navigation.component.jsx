import './navigation.style.css';

import {ReactComponent as NavLogo} from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

import Button from '../../component/button/button.component';

const navigate = (e) => {
    console.log('navigate to sign in page');
}

const Navigation = () => {
    
    return(
        <nav>
            <div>
                <NavLogo/>
            </div>
            <div className='nav_list'>
                <Link className='sign-in' to='/'>log in</Link>    
                <Button onClick={navigate}>post a job</Button>
            </div>
        </nav>
    )
}

export default Navigation;