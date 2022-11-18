import './post-job.style.css';

import { useNavigate } from 'react-router-dom';
import { useRef, useContext } from 'react';
import { LoginContext } from '../../context/login.context'
import BaseFormInputs from '../../component/form-input/form-input.component';


import CaretLeft from '../../assets/buttons/caret-left.svg';
import CaretRight from '../../assets/buttons/caret-right.svg';
import Close from '../../assets/buttons/x.svg';
import TalentIllustrate from '../../assets/postajob.webp';
import DollarSign from '../../assets/buttons/dollar.svg'
import UploadFile from '../../assets/upload-file.jpg';

import { useState, userContext } from 'react';
import { UserContext } from '../../context/user.context';
import postJob from '../../api/post-job.api';





const PostJob = () => {
    const jobCreateFormRef = useRef();
    const uploadFileRef = useRef();
    const logoRef = useRef();

    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);

    const [salaryType, setSalaryType] = useState();
    
    const { setLoginActive, loginActive } = useContext(LoginContext);


    const goBack = () => navigate(-1);
    const goToHome = () => navigate('/');

    const uploadFileClick = () => uploadFileRef.current.click();
    const salaryTypeChanged = (e) => setSalaryType(e.target.value);

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



    

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(jobCreateFormRef.current);
        const logoFormData = new FormData();

        logoFormData.set('file', formData.get("logo"));

        // console.group('%c Form Data', 'color: green')
        //     console.log(formData.get("logo"));
        //     console.log(logoFormData.get('file'));
        // console.groupEnd();


        if(!currentUser) {
            setLoginActive(!loginActive)
        } else {
            // postJob(jobCreateFormRef.current, logoFormData, navigate);
        } 
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

            <form ref={jobCreateFormRef} className='post-form' onSubmit={submitHandler}>
                <BaseFormInputs/>

                <div className='group selectors'>
                    <div className='logo-container'>
                        <div className='logo-overview flex-jc-ac'>
                            <img ref={logoRef} src={UploadFile} alt='upload file icon' />
                        </div>
                        <div className='logo-file'>
                            <input type='file' name='logo' onChange={fileView} ref={uploadFileRef}  style={{display: 'none'}} />
                            <button type='button' onClick={uploadFileClick} className='upload-btn'>choose a logo</button>
                        </div>
                    </div>
                    <div className='aside flex-dc-jsb-ac'>
                        <select name='vacancy' className='select-value' required>
                            <option className='default' value=''> -- select vacancy --</option>
                            <option value='1'>  one </option>
                            <option value='2'>  two </option>
                            <option value='3'>  three </option>
                            <option value='4'>  four </option>
                            <option value='5'>  five </option>
                            <option value='+5'> more than 5</option>
                        </select>
                        
                        <select name='job_type' className='select-value' required>
                            <option className='default' value=''> -- select job type --</option>
                            <option value='1'>  full time </option>
                            <option value='2'>  part time </option>
                        </select>

                        <select name='salary_type' className='select-value' onChange={salaryTypeChanged}>
                            <option className='default' value=''> -- select salary type --</option>
                            <option value='per month'>  per month </option>
                            <option value='per year'>  per year </option>
                        </select>

                    </div>

                </div>

                <div className='group'>
                    <p className='post-form_label'>Job description <span className='input-selector'>*</span></p>
                    <div className='job-description'>
                        <textarea className='description-text' name='job_description' required></textarea>
                        <span className='text-background'/>
                    </div>
                </div>
                
                <div className='group'>
                    <span className='post-form_label'>Salary {salaryType} <span className='input-selector'>*</span></span>
                    <div className='double-input'>
                        <div className='input-one flex-jsb'>
                            <img src={DollarSign} alt='dollar icon'/>
                            <input type='number' name='min_salary' placeholder='Min' required/>
                        </div>
                        <div className='input-two flex-jsb'>
                            <img src={CaretRight} alt='max-salary'/>
                            <input type='number' name='max_salary' placeholder='Max' required/>
                        </div>
                    </div>
                </div>

                <button type='submit' className='post-form-submit'>Save and continue</button>
            </form>

        </section>
    )

}

export default PostJob;