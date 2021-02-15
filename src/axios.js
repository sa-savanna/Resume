import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://resume-287513-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;