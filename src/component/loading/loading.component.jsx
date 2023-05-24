import './loading.style.css';
import styled from 'styled-components';
import { useEffect } from 'react';

import { useContext } from 'react';
import { ErrorContext } from '../../context/error.context'

const StyledError = styled.div`
  background-color: #ffebeb;
  border: 1px solid #ff7f7f;
  color: red;
  padding: 1rem 2rem;
  margin-bottom: 10px;
  width: fit-content;

  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translate(-50%);
  z-index: 100;

  border-radius: 4px;
`

const Loading = () => {
    const { error, setError } = useContext(ErrorContext);
        
    // useEffect(() => {
    //     setTimeout(() => {
    //         setError(null);      
    //     }, 3000);
    // }, [])

    if(error) {
        console.log(error)
        return <StyledError>{error.message}</StyledError>
    }

    return (
        <div className='loader-container'>
            <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="path" fill="none" stroke='#ddd' strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
        </div>
    )
}

export default Loading;