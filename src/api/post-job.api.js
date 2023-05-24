import axios from 'axios';


const API = axios.create({ baseURL: "https://gdsc-job-app.herokuapp.com/api" });


const postJob = async (form, logoFormData, navigate, setError) => {

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


    try {
        const { data } = await API.post('/upload',logoFormData);
        formData.company_logo = data.path;      
        try {
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
            setError(error);
        }
    } catch(error) {
        setError(error);
    }

}

export default postJob;
