import React, { useState } from "react";
import { stderollemntstore } from "../../store/stdenrollemntstore";
// import { useStderollemntstore } from "./path-to-store"; // Replace with actual path to the store

const StudentEnrollmentForm = () => {
  const { enrollstd, loading } = stderollemntstore();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    coursename: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await enrollstd(formData);
      alert("Student enrolled successfully!");
      setFormData({ name: "", phone: "", email: "", coursename: "" }); // Reset form
    } catch (error) {
      console.error("Enrollment failed", error);
      alert("Failed to enroll student. Please try again.");
    }
  };

  return (
   

//       <div className="bg-gradient-to-r min-h-screen flex items-center justify-center px-4 py-12">
//       <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden md:flex">
//         {/* Left Column */}
//         <div className="hidden md:block md:w-1/2 bg-cover bg-center" >
//             {/* //  style={{ backgroundImage: "url('/public/WhatsApp Image 2024-12-11 at 12.43.31.jpeg')" }}> */}
// <img className="h-94 w-96 " src="/public/online-communication_1098-15842.jpg" alt="" />
// <div className="flex">

// <img className="h-44 w-44 m-3 mt-10 rounded-md" src="https://img.freepik.com/free-photo/people-studying-peacefully-library_23-2148844715.jpg?ga=GA1.1.2082760502.1716623693&semt=ais_hybrid" alt="" />
// <img className="h-44 w-44 m-3 mt-10 rounded-sm" src="https://img.freepik.com/free-photo/diverse-group-students-taking-online-tests_74855-1805.jpg?ga=GA1.1.2082760502.1716623693&semt=ais_hybrid" alt="" />
// </div>
//              </div>

//         {/* Right Column */}
//         <div className="w-full md:w-1/2 p-8">
//           <h2 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Student Enrollment</h2>
//           <p className="text-gray-600 mb-8 text-center">Enroll now to kickstart your journey with us!</p>
         
//           <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Course Name:</label>
//           <input
//             type="text"
//             name="coursename"
//             value={formData.coursename}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Enrolling..." : "Enroll Student"}
//         </button>
//       </form>

      

          
//         </div>
//       </div>
//     </div>

<div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center px-4 py-12">
<div className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden md:flex">
  {/* Left Column */}
  <div className="hidden md:block md:w-1/2 bg-cover bg-center relative">
    <img
      className="w-full h-full object-cover"
      src="/public/online-communication_1098-15842.jpg"
      alt="Online Communication"
    />
    <div className="absolute bottom-4 left-4 flex space-x-4">
      <img
        className="h-20 w-20 rounded-md"
        src="https://img.freepik.com/free-photo/people-studying-peacefully-library_23-2148844715.jpg?ga=GA1.1.2082760502.1716623693&semt=ais_hybrid"
        alt="Library Study"
      />
      <img
        className="h-20 w-20 rounded-md"
        src="https://img.freepik.com/free-photo/diverse-group-students-taking-online-tests_74855-1805.jpg?ga=GA1.1.2082760502.1716623693&semt=ais_hybrid"
        alt="Online Tests"
      />
    </div>
  </div>

  {/* Right Column */}
  <div className="w-full md:w-1/2 p-8">
    <h2 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Student Enrollment</h2>
    <p className="text-gray-600 mb-8 text-center">Enroll now to kickstart your journey with us!</p>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your full name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your phone number"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your email address"
        />
      </div>
      <div>
        <label htmlFor="coursename" className="block text-gray-700 font-semibold mb-1">Course Name</label>
        <input
          type="text"
          name="coursename"
          value={formData.coursename}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter the course name"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 font-bold text-white rounded-lg shadow-md focus:outline-none transition duration-300 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Enrolling..." : "Enroll Now"}
        </button>
      </div>
    </form>
  </div>
</div>
</div>
  );
};

export default StudentEnrollmentForm;