
const API_ROOT = "https://gdsc-job-app.herokuapp.com/api";

const fetchEndpoint = async (endpoint, setState) => {
    const response = await fetch(`${API_ROOT}/${endpoint}`)
    const data = await response.json();
    setState(data.data);
}

export default fetchEndpoint;