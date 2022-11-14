import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

const API = axios.create({ baseURL: "https://gdsc-job-app.herokuapp.com/api" });


const errorHandler = (error) => {
    console.log('%c' + error, 'color: green')
}

const isFormDataValid = (data) => {
    // validation... 

    console.log(data) // return this object
    /*
        {
            "company_email": "email@gmail.com",
            "company_logo": "3aa58618-d55f-48f0-959e-f3066566d0e5/",
            "company_name": "google",
            "created_at": 1668438398193,
            "description": "Job Description",
            "id": "d177b67f-e9a7-4241-9b31-2eacb609c8f1",
            "location": "Cairo",
            "salary": "12 13k",
            "title": "Front End Developer",
            "type": "part time",
            "vacancy": "5"
        }
    */
    return true;
}

const postJob = async (form, logoFormData, navigate) => {

    const fields = Object.values(form)
    const formValues = fields.reduce((obj, field) => {
        if (field.name) {
            obj[field.name] = field.value;
        }
        return obj;
    }, {});
    const created_at = new Date().toISOString();


    const {
        company_email, company_name, 
        job_description, job_title, vacancy,
        min_salary, max_salary, location, job_type
    } = formValues;



    const formData = {
        "company_email": company_email,
        "company_logo": '',
        "company_name": company_name,
        "created_at": created_at,
        "description": job_description,
        "location": location,
        "salary": `${min_salary} ${max_salary}k`,
        "title": job_title,
        "type": + job_type,
        "vacancy": + vacancy
    }

/*
{
    "company_email": "email@gmail.com",
    "company_logo": "461c2566-4759-4f19-b1cb-5118e8cc5941/",
    "company_name": "google",
    "created_at": "1668443392698",
    "description": "Job Description",
    "location": "Cairo",
    "salary": "12 14k",
    "title": "Front End Developer",
    "type": 2,
    "vacancy": 5
}
*/

    try {
        const { data } = await API.post('/upload',logoFormData);
        formData.company_logo = data.path;

        if(isFormDataValid(formData)) {
            try {
                // const { data } = await API.post('/jobs', JSON.stringify(formData)); // => Bad request
                const response = await fetch('https://gdsc-job-app.herokuapp.com/api/jobs', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json;'
                    }
                });

                const data = await response.json();
                console.log(data.data);
                navigate(`/job/${data.data.id}`);
            } catch(error) {
                errorHandler(error);
            }
        }
    } catch(error) {
        errorHandler(error);
    }

}

export default postJob;
