import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './coponents/pages/Home'
import Layout from './coponents/pages/Layout'
import Admin from './coponents/pages/Admin'
import Contact from './coponents/pages/Contact'
import GenerateLoginid from './coponents/pages/GenerateLoginid'
import Webdeveelopmennt from './coponents/pages/Webdeveelopmennt'
import Seo from './coponents/pages/Seo'
import Videoediting from './coponents/pages/Videoediting'
import Graphicedesisning from './coponents/pages/Graphicedesisning'
import Ecommerce from './coponents/pages/Ecommerce'
import Digitalmarketing from './coponents/pages/Digitalmarketing'
import Wordpress from './coponents/pages/Wordpress'
import StudentEnrollmentForm from './coponents/pages/StudentEnrollmentForm'
import User from './coponents/pages/User'
import EnrolledStudents from './coponents/pages/EnrolledStudents;'
// import RegisterForm from './coponents/pages/Registerform'
import RegisterForm from './coponents/pages/RegisterForm'

const App = () => {
  return (
    <div>
{/* <EnrolledStudents/> */}
      
      <Layout>
     
      
        <Routes>
          <Route path='/generateloginid' element={<GenerateLoginid/>} />
          <Route path='/enrolled' element={<EnrolledStudents/>} />
          <Route path='/registeredusers' element={<User/>} />
          <Route path='/webdevelopment' element={<Webdeveelopmennt/>} />
          <Route path='/seo' element={<Seo/>} />
          <Route path='/Videoediting' element={<Videoediting/>} />
          <Route path='/graphicdesigning' element={<Graphicedesisning/>} />
          <Route path='/ecommerce' element={<Ecommerce/>} />
          <Route path='/digitalmarketing' element={<Digitalmarketing/>} />
          <Route path='/wordpress' element={<Wordpress/>} />
        
          <Route path='/contact' element={<Contact/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/Enrollemnetform' element={<StudentEnrollmentForm/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/registeration' element={<RegisterForm/>} />
        </Routes>
        
      </Layout>
    </div>
  )
}

export default App
