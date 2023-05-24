import axios from 'axios';



const API = axios.create({ baseURL: "https://gdsc-job-app.herokuapp.com/api" });

axios.interceptors.response.use((response) => {
    
    return response
}, (error) => {
    return Promise.reject(error);
})

axios.interceptors.request.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error);
})

export const getJobs = (page) => API.get(`/jobs?page=${page}`);

export const getJob = (id) => API.get(`/jobs/${id}`);


