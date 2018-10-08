import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-pm.firebaseio.com/'
});

export default instance;