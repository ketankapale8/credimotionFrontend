import axios from 'axios';
const useToken = JSON.stringify(localStorage.getItem("token"));
console.log(useToken);

const newRequest = axios.create({
    baseURL : "https://new-credimotion-backend.vercel.app",
    withCredentials:true
})

export default newRequest