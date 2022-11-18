
import axios from 'axios';

const API = axios.create({ baseURL: "https://gdsc-job-app.herokuapp.com/api" });

axios.interceptors.response.use((response) => {
    console.log(response)
    return response
}, (error) => {
    console.log('%c error handler', 'color: green');
    console.log(error);
    
})

axios.interceptors.request.use((response) => {
    console.log(response)
    return response
}, (error) => {
    console.log('%c error handler', 'color: green');
    console.log(error);
})

export const getJobs = (page) => API.get(`/jobs?page=${page}`);

export const getJob = (id) => API.get(`/jobs/${id}`);


