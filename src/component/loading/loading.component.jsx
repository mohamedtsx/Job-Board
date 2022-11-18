import { useEffect } from 'react';
import { useState } from 'react';
import './loading.style.css';

// const loaderStyle = {

// }




const Loading = () => {
    const [ active, setActive ] = useState(true);

    // when user choose an account error message has shown

    // useEffect(() => {
    //     setTimeout(() => {
    //         setActive(false);      
    //     }, 6000);
    // }, [])


    return(
        // active ? (
            <div className='loader-container'>
                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" stroke='#ddd' strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        // ) : (
        //     <div className='over-loading-message'>
        //         <h1>Error Message</h1>
        //     </div>
        // )
    )
}

export default Loading;