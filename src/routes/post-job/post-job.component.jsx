import './post-job.style.css';

import { useNavigate } from 'react-router-dom';
import { useRef, useContext } from 'react';
import { LoginContext } from '../../context/login.context'

import CaretLeft from '../../assets/buttons/caret-left.svg';
import CaretRight from '../../assets/buttons/caret-right.svg';
import Close from '../../assets/buttons/x.svg';
import TalentIllustrate from '../../assets/postajob.webp';
import Eraser from '../../assets/buttons/eraser.svg';
import DollarSign from '../../assets/buttons/dollar.svg'
import UploadFile from '../../assets/upload-file.jpg';


import FormInput from '../../component/form-input/form-input.component';
import { useState } from 'react';



const PostJob = () => {
    const jobInfoFormRef = useRef();

    const knownEmailRef = useRef();
    const emailRef = useRef();

    const knownLocationRef = useRef();
    const locationRef = useRef();

    const knownCompanyRef = useRef();
    const companyRef = useRef();

    const uploadFileRef = useRef();
    const logoRef = useRef();

    const navigate = useNavigate();
    const [salaryType, setSalaryType] = useState();
    
    const { setLoginActive, loginActive } = useContext(LoginContext);


// take state hidden element from user context
    const FORM_ITEMS = {
        email: {
            name: 'email',
            type: 'email',
            label: 'Email',
            state: 'hidden'
        },
        company: {
            name: 'company',
            label: 'Company',
            state: 'hidden'
        },
        jobTitle: {
            name: 'title',
            label: 'Job title '
        },
        location: {
            name: 'location',
            label: 'Location',
            describe: 'Enter your location',
            state: 'hidden'
        }
    }





    const goBack = () => {
        navigate(-1);
    }

    const goToHome = () => {
        navigate('/');
    } 

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

    const uploadFileClick = () => {
        uploadFileRef.current.click();

    }

    const salaryTypeChanged = (e) => {
        setSalaryType(e.target.value);
    }

    const fileView = () => {
        const file = uploadFileRef.current.files['0']; 
        if(file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result;
                logoRef.current.src = result;
    
            }
            reader.readAsDataURL(file)
        }
    }

    const isLogged = false;

    const submitHandler = (e) => {
        e.preventDefault();

        if(!isLogged) {
            setLoginActive(!loginActive)
        }
        
        // const filed = e.target.name.value || user context value

        // send all values to api
    }
   


 
    return(
        <section className='post-container flex-dc-jsb-ac'>
            <div className='post-heading group'>
                <div className='heading_top flex-jsb'>
                    <div className='heading_top_btn' onClick={goBack}><img src={CaretLeft} alt='back icon'/></div>
                    <div className='heading_top_btn' onClick={goToHome}><img src={Close} alt='back icon'/></div>
                </div>
                <div className='heading_main flex-jsb'>
                    <div className='post-process flex-dc-jse-ac'>
                        <span className='step-title'>Basic information</span>
                        <div className='process_rang flex-jsb'>
                            <span className='step-one'/>
                            <span className='step-two'/>
                            <span className='step-three'/>
                        </div>
                    </div>
                    <div className='heading_image'>
                        <img src={TalentIllustrate} alt='talent illustrate'/>
                    </div>
                </div>
            </div>

            <div className='group'>
                <p ref={knownEmailRef} className='known'>
                    <b>Email:</b> email@gmail.com 
                    <img src={Eraser} alt='edit icon' onClick={editEmail} title='edit email icon'/>
                </p>
                <p ref={knownLocationRef} className='known'>
                    <b>Location:</b> Country / City 
                    <img src={Eraser} alt='edit icon' onClick={editLocation} title='edit location icon'/>
                </p>
                <p ref={knownCompanyRef} className='known'>
                    <b>Company:</b> google
                    <img src={Eraser} alt='edit icon' onClick={editCompanyName} title='edit company name'/>
                </p>

            </div>

            <form ref={jobInfoFormRef} className='post-form' onSubmit={submitHandler}>
                <FormInput reference={emailRef} item={FORM_ITEMS.email}/>
                <FormInput reference={locationRef} item={FORM_ITEMS.location}/>
                <FormInput reference={companyRef} item={FORM_ITEMS.company}/>
                <FormInput item={FORM_ITEMS.jobTitle}/>

                <div className='group selectors'>
                    <div className='logo-container'>
                        <div className='logo-overview flex-jc-ac'>
                            <img ref={logoRef} src={UploadFile} alt='upload file icon' />
                        </div>
                        <div className='logo-file'>
                            <input onChange={fileView} ref={uploadFileRef} type='file' style={{display: 'none'}} />
                            <button type='button' onClick={uploadFileClick} className='upload-btn'>choose a logo</button>
                        </div>
                    </div>
                    <div className='aside flex-dc-jsb-ac'>
                        <select name='select-vacancy' className='select-value'>
                            <option className='default' value=''> -- select vacancy --</option>
                            <option value='1'>  one </option>
                            <option value='2'>  two </option>
                            <option value='3'>  three </option>
                            <option value='4'>  four </option>
                            <option value='5'>  five </option>
                            <option value='+5'> more than 5</option>
                        </select>
                        
                        <select name='select-type' className='select-value'>
                            <option className='default' value=''> -- select job type --</option>
                            <option value='full time'>  full time </option>
                            <option value='part time'>  part time </option>
                        </select>

                        <select name='select-salary' className='select-value' onChange={salaryTypeChanged}>
                            <option className='default' value=''> -- select salary type --</option>
                            <option value='per month'>  per month </option>
                            <option value='per year'>  per year </option>
                        </select>

                    </div>

                </div>

                <div className='group'>
                    <p className='post-form_label'>Job description <span className='input-selector'>*</span></p>
                    <div className='job-description'>
                        <textarea className='description-text' name='job-description'></textarea>
                        <span className='text-background'/>
                    </div>
                    
                </div>
                
                <div className='group'>
                    <span className='post-form_label'>Salary {salaryType} <span className='input-selector'>*</span></span>
                    <div className='double-input'>
                        <div className='input-one flex-jsb'>
                            <img src={DollarSign} alt='dollar icon'/>
                            <input type='number' name='min-salary' placeholder='Min'/>
                        </div>
                        <div className='input-two flex-jsb'>
                            <img src={CaretRight} alt='max-salary'/>
                            <input type='number' name='max-salary' placeholder='Max'/>
                        </div>
                    </div>
                </div>







                <button type='submit' className='post-form-submit'>Save and continue</button>
            </form>

        </section>
    )

}

export default PostJob;