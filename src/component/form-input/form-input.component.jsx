import './form-input.style.css';
import { useRef } from 'react';
import Eraser from '../../assets/buttons/eraser.svg';


const KNOWN_INFO = {
    email: 'email@gmail.com',
    location: 'Cairo',
    company: 'google'
}


const BaseFormInputs = () => {

    const knownEmailRef = useRef();
    const emailRef = useRef();

    const knownLocationRef = useRef();
    const locationRef = useRef();

    const knownCompanyRef = useRef();
    const companyRef = useRef();


    const editEmail = () => {
        knownEmailRef.current.classList.add('edit');
        emailRef.current.classList.remove('hidden');
    }

    const editLocation = () => {
        knownLocationRef.current.classList.add('edit');
        locationRef.current.classList.remove('hidden');
    }

    const editCompanyName = () => {
        knownCompanyRef.current.classList.add('edit');
        companyRef.current.classList.remove('hidden');
    }


    return(
        <>
            <div className='group'>
                <p ref={knownEmailRef} className='known'>
                    <b>Email:</b> {KNOWN_INFO.email}
                    <img src={Eraser} alt='edit icon' onClick={editEmail} title='edit email icon'/>
                </p>
                <p ref={knownLocationRef} className='known'>
                    <b>Location:</b> {KNOWN_INFO.location}
                    <img src={Eraser} alt='edit icon' onClick={editLocation} title='edit location icon'/>
                </p>
                <p ref={knownCompanyRef} className='known'>
                    <b>Company:</b> {KNOWN_INFO.company}
                    <img src={Eraser} alt='edit icon' onClick={editCompanyName} title='edit company name'/>
                </p>
            </div>

            <div ref={emailRef} className='group hidden'>
                <label className='post-form_label' htmlFor='email'>Email<span className='input-selector'>*</span></label>
                <input className='post-form_input' type='email' name='company_email' id='email' defaultValue={KNOWN_INFO.email} />
            </div>

            <div ref={companyRef} className='group hidden'>
                <label className='post-form_label' htmlFor='company_name'>Company<span className='input-selector'>*</span></label>
                <input className='post-form_input' type='text' name='company_name' id='company_name' defaultValue={KNOWN_INFO.company}/>
            </div>

            <div ref={locationRef} className='group hidden'>
                <label className='post-form_label' htmlFor='location'>Location<span className='input-selector'>*</span></label>
                <input className='post-form_input' type='text' name='location' id='location' defaultValue={KNOWN_INFO.location}/>
            </div>

            <div className='group'>
                <label className='post-form_label' htmlFor='job_title'>Job title <span className='input-selector'>*</span></label>
                <input className='post-form_input' type='text' name='job_title' id='job_title' />
            </div>

        </>
    )
}



export default BaseFormInputs;