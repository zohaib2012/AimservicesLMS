import { create } from "zustand";
// import { axioinstance } from "../lib/Axios";
import axios from "axios";
import { axioinstance } from "../lib/Axios";

export let stderollemntstore=create((set)=>({
    stdenrolls:[],
    loading:false,

    enrollstd:async(data)=>{
        set({loading:true})
        try {
            
            let {name, phone, email, coursename}=data
            console.log(data)
            
            const response=await axios.post("http://localhost:5000/api/enrollement",{name, phone, email, coursename})
            set((stdenrollementstate)=>({
                stdenrolls:[...stdenrollementstate.stdenrolls, response.data]            }))
                
            
        } catch (error) {
            console.log(error)
        }
        

    },

getenrolledstd:async()=>{
    set({loading:true})
    try {
        const response=await axioinstance.get("/getenrollements")
        set({
            stdenrolls:response.data.getenrollements, loading:false 

        })
    } catch (error) {
        console.log(error)
    }
},

removeenrolledstd:async(id)=>{
    set({loading:true})
    try {
        
        let response=await axioinstance.delete(`/removestudent/${id}`)
set((state)=>({
    stdenrolls:state.stdenrolls.filter((student)=> student._id !== id)
}))


    } catch (error) {
        console.log(error)
    }
},

updatedstd:async (id, updatedstd)=>{
set({loading:true})    
try {
    let response= await axioinstance.put(`/updatestudent/${id}`, updatedstd)
    // set((state) => ({
    //     stdenrolls: state.stdenrolls.map((student) =>
    //       student._id === id ? { ...student, ...response.data } : student
    //     ),
    //     loading: false,
    //   }));


set((state)=>({
    stdenrolls : state.stdenrolls.map((student)=>
        student._id === id ? {...student, ...response.data} : student
),loading:false
}))


} catch (error) {
    console.log(error)
}
},

generateloginid:async (email)=>{
    set({loading:true})
    try {
        const response=await axioinstance.post("/stdloginid",{email})
        set({
loginid:response.data.loginid,
password:response.data.password
        })
    } catch (error) {
        console.log(error)
    }
    
}
}))
