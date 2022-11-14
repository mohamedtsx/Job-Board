
import axios from 'axios';

const API = axios.create({ baseURL: "https://gdsc-job-app.herokuapp.com/api" });


export const getJobs = (page) => API.get(`/jobs?page=${page}`);

export const getJob = (id) => API.get(`/jobs/${id}`);



// export const getJob = async (id, setState) => {
//     const response = await API.get(`/jobs?=${id}`);
//     const { data } = await response;
//     setState(data.data);
//     console.log('two');
// }


