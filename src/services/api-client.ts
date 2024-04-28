import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '554b39eed5c74e8cab04ef3610d01f8a'
    }
})