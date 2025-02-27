import { create } from "zustand"
import { axioinstance } from "../lib/Axios"
import axios from "axios"
// import Login from "../lib/pages/Login"

export let useAdminstore=create((set)=>({
admins:null,
loading:false,


register:async (admindata)=>{
    try {
        set({loading:true})
        
        const{name, email, password}=admindata
        const response=await axios.post("http://localhost:5000/api/register",{
            
            
            name, email, password
        }
        
        )
set({admins:response.data, loading:false  })
    } catch (error) {
        console.log(error)
    }

},

get:async()=>{
    set({loading:true})
    try {
        let response=await axios.get("http://localhost:5000/api/registeruser")
        set({admins:response.data.allregistereduser,  loading:false})
    } catch (error) {
        console.log(error)
    }
}



}))