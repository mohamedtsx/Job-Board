import './form-input.style.css';
import { v4 as uuidv4 } from 'uuid';


const FormInput = ({item, reference}) => {

    const inputId = uuidv4();

    const { label, name, type, state, ...otherProps } = item;


    return(
        <div ref={reference} className={`group ${state ? 'hidden': ''}`}>
            <label className='post-form_label' htmlFor={inputId}>{label}<span className='input-selector'>*</span></label>
            <input className='post-form_input' type={type || 'text'} name={name} id={inputId}  {...otherProps}/>
        </div>
    )
}

export default FormInput;