import axios from "axios";

export let axioinstance= axios.create({
    baseURL:"http://localhost:5000/api",
    withCredentials:true

})