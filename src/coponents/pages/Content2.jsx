import React from 'react';
import { Link } from 'react-router-dom';
// import CoursesList from './CoursesList';

const TwoColumnSection = () => {
  return (
    <div>

   
    <div className=" flex items-center justify-center ">
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Left Column: Two Boxes */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Our Vision</h2>
            <p className="text-white">Our vision is to build a world where every young individual has the skills and knowledge to thrive in the digital age. We aim to be a catalyst for global innovation and socio-economic development.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
            <p className="text-white">
            Our mission is to empower youth through accessible, high-quality digital training and courses. We strive to foster lifelong learning, inspire innovation, and create opportunities for personal and professional growth
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex items-center justify-center">
          <img
            src="https://avatars.mds.yandex.net/i?id=8088a18f1ff607f278c4275812b0995bbfcef6ce-5232606-images-thumbs&n=13"
            alt="Online Courses"
            className="rounded-lg shadow-lg"
          />
        </div>
        
      </div>
     </div>


<div className=' w-full h-96 '>
<div>
<h1 className=' text-center font-bold text-gray-950 text-3xl m-3'>Job Placement Cell</h1>
<p className='text-center  text-gray-800 mx-36  m-6'>Nexskill’s Job Placement Cell is dedicated to student employment and industry placements. With over 170 industry partners, our placement cell focuses on connecting graduates with job opportunities, ensuring they have the support and resources needed to succeed in their professional journeys.</p>
</div>

<div className='flex mx-80 my-10'>
  <div><img className='w-44 mx-14 h-44' src="/public/WhatsApp Image 2024-12-12 at 13.24.50.jpeg" alt="error" />
  <h1 className='mx-20 font-semibold' > Professional Courses</h1>
  </div>
  <div><img className='w-44 h-44 mx-14' src="/public/WhatsApp Image 2024-12-12 at 14.44.31.jpeg" alt="error" />
  <h1 className='mx-20 font-semibold' > Live Training</h1>
  </div>
  <div>
  <img className='w-48 h-44 mx-18'  src="/public/WhatsApp Image 2024-12-12 at 13.24.49.jpeg" alt="error" />
 <h1 className='mx-14 font-semibold' > Expert Trainers</h1>
  </div>
  <div></div>
</div>
</div>


     </div>
  );
};

export default TwoColumnSection;
