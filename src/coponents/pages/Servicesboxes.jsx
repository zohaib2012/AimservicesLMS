// import React from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Link } from 'react-router-dom';
// const Servicesboxes = () => {
    



//   return (
//     <div>
//         <div className=''>
  

//             {/* <div className='w-full h-72 bg-gray-900'>

//             </div> */}
//         </div>



     
//             <h1 className='font-bold text-2xl m-4 text-center '>
//             2024’s Top Choice: Dive into Aimservices Micro Degree Programs!

// </h1>
// <div className='flex m-8 '>
//             {/* boxes */}
//         {/* <Link to={""}></Link> */}
//             <div className=' m-3 w-64 rounded-xl  border-2 border-black'>
//                 <img  className=' w-full h-52  rounded-xl' src="/public/WhatsApp Image 2024-12-11 at 12.41.32 (1).jpeg" alt="error" />
          
//           <h1 className='text-gray-900 text-center my-3'>6 month duration</h1>
//           <h1 className='text-gray-900 font-semibold text-center my-3'>Full Stack web development</h1>
// <a href="/Enrollemnetform">

//           <button className='border-2 rounded-lg border-black p-2 m-5 text-center ml-20 hover:bg-gray-900 hover:font-semibold hover:text-white'>start now</button>
// </a>

//             </div>
//             <div className=' m-3 w-64 rounded-xl  border-2 border-black'>
//                 <img  className=' w-full h-52  rounded-xl' src="/public/WhatsApp Image 2024-12-11 at 12.41.32 (2).jpeg" alt="error" />
          
//           <h1 className='text-gray-900 text-center my-3'>2 month duration</h1>
//           <h1 className='text-gray-900 font-semibold text-center my-3'>SEO</h1>
// <a href="/Enrollemnetform">

//           <button className='border-2 rounded-lg border-black p-2 m-5 text-center ml-20 hover:bg-gray-900 hover:font-semibold hover:text-white'>start now</button>
// </a>

//             </div>
//             <div className=' m-3 w-64 rounded-xl  border-2 border-black'>
//                 <img  className=' w-full h-52  rounded-xl' src="/public/WhatsApp Image 2024-12-11 at 12.41.32 (3).jpeg" alt="error" />
          
//           <h1 className='text-gray-900 text-center my-3'>2 month duration</h1>
//           <h1 className='text-gray-900 font-semibold text-center my-3'>Video Editing</h1>
// <a href="/Enrollemnetform">

//           <button className='border-2 rounded-lg border-black p-2 m-5 text-center ml-20 hover:bg-gray-900 hover:font-semibold hover:text-white'>start now</button>
// </a>

//             </div>
//             <div className=' m-3 w-64 rounded-xl  border-2 border-black'>
//                 <img  className=' w-full h-52  rounded-xl' src="/public/WhatsApp Image 2024-12-11 at 12.41.32.jpeg" alt="error" />
          
//           <h1 className='text-gray-900 text-center my-3'>2 month duration</h1>
//           <h1 className='text-gray-900 font-semibold text-center my-3'>Graphic designing</h1>
// <a href="/Enrollemnetform">

//           <button className='border-2 rounded-lg border-black p-2 m-5 text-center ml-20 hover:bg-gray-900 hover:font-semibold hover:text-white'>start now</button>
// </a>

//             </div>
//             <div className=' m-3 w-64 rounded-xl  border-2 border-black'>
//                 <img  className=' w-full h-52  rounded-xl' src="/public/WhatsApp Image 2024-12-11 at 12.43.31.jpeg" alt="error" />
          
//           <h1 className='text-gray-900 text-center my-3'>1 year duration</h1>
//           <h1 className='text-gray-900 font-semibold text-center my-3'>Complete package</h1>
// <a href="/Enrollemnetform">

//           <button className='border-2 rounded-lg border-black p-2 m-5 text-center ml-20 hover:bg-gray-900 hover:font-semibold hover:text-white'>start now</button>
// </a>

//             </div>
//             <div className=' m-3 w-64 rounded-xl  border-2 border-black'>
//                 <img  className=' w-full h-52  rounded-xl' src="/public/WhatsApp Image 2024-12-11 at 12.42.55.jpeg" alt="error" />
          
//           <h1 className='text-gray-900 text-center my-3'>2 month duration</h1>
//           <h1 className='text-gray-900 font-semibold text-center my-3'>Lead Generation</h1>
// <a href="/Enrollemnetform">

//           <button className='border-2 rounded-lg border-black p-2 m-5 text-center ml-20 hover:bg-gray-900 hover:font-semibold hover:text-white'>start now</button>
// </a>

//             </div>

//             </div>
// {/* </Carousel>; */}


//     </div>
//   )
// }

// export default Servicesboxes



import React from 'react';
import "react-multi-carousel/lib/styles.css";

const ServicesBoxes = () => {
  const services = [
    {
      duration: "6 month duration",
      title: "Full Stack Web Development",
      imgSrc: "/public/WhatsApp Image 2024-12-11 at 12.41.32 (1).jpeg",
      link: "/Enrollemnetform",
    },
    {
      duration: "2 month duration",
      title: "SEO",
      imgSrc: "/public/WhatsApp Image 2024-12-11 at 12.41.32 (2).jpeg",
      link: "/Enrollemnetform",
    },
    {
      duration: "2 month duration",
      title: "Video Editing",
      imgSrc: "/public/WhatsApp Image 2024-12-11 at 12.41.32 (3).jpeg",
      link: "/Enrollemnetform",
    },
    {
      duration: "2 month duration",
      title: "Graphic Designing",
      imgSrc: "/public/WhatsApp Image 2024-12-11 at 12.41.32.jpeg",
      link: "/Enrollemnetform",
    },
    {
      duration: "1 year duration",
      title: "Complete Package",
      imgSrc: "/public/WhatsApp Image 2024-12-11 at 12.43.31.jpeg",
      link: "/Enrollemnetform",
    },
    {
      duration: "2 month duration",
      title: "Lead Generation",
      imgSrc: "/public/WhatsApp Image 2024-12-11 at 12.42.55.jpeg",
      link: "/Enrollemnetform",
    },
  ];

  return (
    <div className="py-8 bg-gray-50">
      <h1 className="font-bold text-2xl mb-6 text-center text-gray-800">
        2024’s Top Choice: Dive into Aimservices Micro Degree Programs!
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-72 bg-white rounded-xl border border-gray-300 shadow-lg overflow-hidden transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
          >
            <img
              className="  w-full h-48 object-cover"
              src={service.imgSrc}
              alt="Service"
            />
            <div className="p-4 text-center">
              <h2 className="text-gray-700 mb-2">{service.duration}</h2>
              <h1 className="font-semibold text-gray-900 text-lg mb-4">
                {service.title}
              </h1>
              <a href={service.link}>
                <button className="w-36 py-2 text-sm border border-gray-700 rounded-lg bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:border-gray-900 transition-colors duration-200">
                  Start Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBoxes;
