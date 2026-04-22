import axios from 'axios';
const BASE_URL = import.meta.env.MODE==="development"? "https://noter-cnrz.onrender.com/api/notes" :"/api "
const api=axios.create({
    baseURL: BASE_URL
})

export default api;