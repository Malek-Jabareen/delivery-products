import axios from 'axios';

export default axios.create({
    baseURL: 'https://msbit-exam-products-store.firebaseio.com',
    headers: {'accept': 'application/json; charset=UTF-8'}
});