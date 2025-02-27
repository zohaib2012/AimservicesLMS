// import React from "react";

// const OnlineCourses = () => {
//   const courses = [
//     {
//       icon: "📚",
//       title: "Web Development",
//       description: "Learn to build websites.",
//     },
//     {
//       icon: "📱",
//       title: "Mobile App Development",
//       description: "Build mobile applications.",
//     },
//     {
//       icon: "🎨",
//       title: "UI/UX Design",
//       description: "Design user interfaces.",
//     },
//     {
//       icon: "💻",
//       title: "Graphic Designing",
//       description: "Analyze data and trends.",
//     },
//     {
//       icon: "🔒",
//       title: "Cyber Security",
//       description: "Protect online systems.",
//     },
//     {
//       icon: "🌐",
//       title: "Digital Marketing",
//       description: "Promote brands online.",
//     },
//     {
//       icon: "📊",
//       title: "Business Analytics",
//       description: "Make data-driven decisions.",
//     },
//     // {
//     //   icon: "🤖",
//     //   title: "AI & Machine Learning",
//     //   description: "Build intelligent systems.",
//     // },
//   ];

//   return (
//     <div className=" bg-gray-100 p-8  mb-1 mt-4">
//       {/* Main Heading */}
//       <div className="text-center mb-10 ">
//         <h1 className="text-4xl font-bold text-gray-800">Explore Our Online Courses</h1>
//         <p className="text-gray-600 mt-4">Find the right course for your career development and skill enhancement.Our mission is to empower youth through accessible, high-quality digital training and courses.</p>
//       </div>

//       {/* Grid of Course Boxes */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {courses.map((course, index) => (
//           <div
//             key={index}
//             className= " bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
//           >
//             <div className="text-4xl mb-4 ">{course.icon}</div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
//             <p className="text-gray-600">{course.description}</p>
//           </div>
//         ))}
//       </div>
// <div className="flex justify-center items-center mt-16">
// <a href="/coursess">

//       <button className="w-48 h-14 border-2 text-2xl rounded-lg font-extralight bg-gray-950 text-white border-white hover:text-black hover:bg-white hover:duration-200 hover:font-semibold hover:border-gray-950 ">Get Courses</button>
// </a>
// </div>
//     </div>
//     );
// };

// export default OnlineCourses;


import React from "react";

const OnlineCourses = () => {
  const courses = [
    {
      icon: "📚",
      title: "Web Development",
      description: "Learn to build websites.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Build mobile applications.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Design user interfaces.",
    },
    {
      icon: "💻",
      title: "Graphic Designing",
      description: "Analyze data and trends.",
    },
    {
      icon: "🔒",
      title: "Cyber Security",
      description: "Protect online systems.",
    },
    {
      icon: "🌐",
      title: "Digital Marketing",
      description: "Promote brands online.",
    },
    {
      icon: "📊",
      title: "Business Analytics",
      description: "Make data-driven decisions.",
    },
  ];

  return (
    <div className="bg-gray-100 p-8 mb-1 mt-4">
      {/* Main Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Explore Our Online Courses
        </h1>
        {/* <p className="text-gray-600 mt-4 max-w-2xl mx-auto"> */}
          {/* Find the right course for your career development and skill enhancement.
          Our mission is to empower youth through accessible, high-quality digital
          training and courses.
        </p> */}
      </div>

      {/* Grid of Course Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-300 text-center border border-gray-200 hover:border-gray-400"
          >
            <div className="text-5xl mb-4">{course.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="flex justify-center items-center mt-16">
        <a href="/coursess">
          <button
            className="w-48 h-14 border-2 text-2xl rounded-lg font-light bg-gray-950 text-white border-white hover:text-black hover:bg-white hover:border-black transition-all duration-300 transform hover:scale-105"
          >
            Get Courses
          </button>
        </a>
      </div>
    </div>
  );
};

export default OnlineCourses;