import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://realestate-84150.firebaseio.com/'
});

export default instance;