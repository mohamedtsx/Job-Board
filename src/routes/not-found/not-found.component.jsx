import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './not-found.style.css';


const NotFound = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);

    }, [])

    return(
        <section className='not-found-container'>
            <h1>Page Not found !</h1>
        </section>
    )
}

export default NotFound;