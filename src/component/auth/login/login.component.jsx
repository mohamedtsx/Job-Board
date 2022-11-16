import './login.style.css';
import { useRef } from 'react';

import { useContext } from 'react';
import { LoginContext } from '../../../context/login.context';
import Close from '../../../assets/buttons/x.svg';
import { 
    signInAuthWithEmailAndPassword,
    signInAuthWithGoogle
} from '../../../util/firebase.js';

const Login = () => {
    const { loginActive, setLoginActive } = useContext(LoginContext)


    const loginRef = useRef();

    const activeHandler = () => {
        setLoginActive(false);
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        const email = e.target.elements['email'].value;
        const password = e.target.elements['password'].value

        try {
            await signInAuthWithEmailAndPassword(email, password);
            setLoginActive(false);
            e.target.reset();
        } catch(error) {
            alert(error)
        }


    }

    const googleSignIn = async () => {
        setLoginActive(false);
        await signInAuthWithGoogle();
    }

    const signUpHandler = () => {

    }

    return(
        <div className={`login-container ${loginActive ? 'active': ''}`}>
            <div className='login-form'>
                <div className='close-login' onClick={activeHandler}>
                    <img src={Close} alt='close form icon'/>
                </div>
                <section className='heading'>
                    <h3>Login to your account</h3>
                    <p>Don't have an account ? <a onClick={signUpHandler} className='sign-in' href='#sign-in'>Sign up!</a></p>
                </section>
                <form ref={loginRef} onSubmit={loginHandler} autoComplete='off'>
                    <input type='email' name='email' className='login_input'  placeholder='Email' required/>
                    <input type='password' name='password' className='login_input' placeholder='Password' required/>
                    <div className='login_features'>
                        <div className='remember-me'>
                            <input type='checkbox' id='remember_user'/>
                            <label htmlFor='remember_user'>Remember me</label>
                        </div>
                        <a className='reset-password' href='#reset-password'>Lost password ?</a>
                    </div>
                    <button type='submit' className='login-submit'>Log in</button>
                </form>
                <div className='potentials'>
                    <h6>Log in using your account on:</h6>
                    <div>
                        <button className='potentials-btn' onClick={googleSignIn}>Google</button>
                        <button className='potentials-btn'>Microsoft</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;