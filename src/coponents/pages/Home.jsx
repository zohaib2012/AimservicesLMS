import React from 'react'

import OnlineCourses from './Content1'
import TwoColumnSection from './Content2'

import Slider from './Slider'
import Iconboxes from './Iconboxes'
import Servicesboxes from './Servicesboxes'


const Home = () => {
  return (
    <div>
      <Slider/>
 
 <Iconboxes/>
<Servicesboxes/>
<OnlineCourses/>
<TwoColumnSection/>
    </div>
  )
}

export default Home