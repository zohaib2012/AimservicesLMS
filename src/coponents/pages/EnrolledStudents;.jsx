// import React, { useEffect } from "react";
// import { stderollemntstore } from "../../store/stdenrollemntstore";
// // import { stderollemntstore } from "../path/to/your/store";

// const EnrolledStudents = () => {
//   const { stdenrolls, loading, getenrolledstd } = stderollemntstore();

//   useEffect(() => {
//     getenrolledstd(); // Fetch enrolled students when the component mounts
//   }, [getenrolledstd]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-lg font-medium text-gray-600">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto my-10">
//       <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//         Enrolled Students
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {stdenrolls && stdenrolls.length > 0 ? (
//           stdenrolls.map((student, index) => (
//             <div
//               key={index}
//               className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {student.name}
//               </h2>
//               <p className="text-sm text-gray-500">
//                <strong>Email:</strong> {student.email}
//               </p>
//               <p className="text-sm text-gray-500">
//                <strong>Course:</strong>  {student.coursename}
//               </p>
//               <p className="text-sm text-gray-500">
//                <strong>Phone</strong>  {student.phone}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No students enrolled yet.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EnrolledStudents;


// import React, { useEffect, useState } from "react";
// import { stderollemntstore } from "../../store/stdenrollemntstore";
// import axios from "axios";

// const EnrolledStudents = () => {
//   const { stdenrolls, loading, getenrolledstd } = stderollemntstore();
//   const [editStudent, setEditStudent] = useState(null);
//   const [studentDetails, setStudentDetails] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     coursename: "",
//   });

//   useEffect(() => {
//     getenrolledstd(); // Fetch enrolled students when the component mounts
//   }, [getenrolledstd]);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/removestdenrollement/${id}`);
//       getenrolledstd(); // Refetch the students list after deletion
//     } catch (error) {
//       console.log("Error deleting student:", error);
//     }
//   };

//   const handleEdit = (student) => {
//     setEditStudent(student);
//     setStudentDetails({
//       name: student.name,
//       email: student.email,
//       phone: student.phone,
//       coursename: student.coursename,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const updatedStudent = await axios.put(
//         `http://localhost:5000/api/updatestdenrollement/${editStudent._id}`,
//         studentDetails
//       );
//       console.log("Updated student:", updatedStudent);
//       setEditStudent(null); // Close the edit form
//       getenrolledstd(); // Refetch the students list after update
//     } catch (error) {
//       console.log("Error updating student:", error);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-lg font-medium text-gray-600">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto my-10">
//       <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//         Enrolled Students
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {stdenrolls && stdenrolls.length > 0 ? (
//           stdenrolls.map((student, index) => (
//             <div
//               key={index}
//               className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {student.name}
//               </h2>
//               <p className="text-sm text-gray-500">
//                 <strong>Email:</strong> {student.email}
//               </p>
//               <p className="text-sm text-gray-500">
//                 <strong>Course:</strong> {student.coursename}
//               </p>
//               <p className="text-sm text-gray-500">
//                 <strong>Phone:</strong> {student.phone}
//               </p>
//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={() => handleEdit(student)}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(student._id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No students enrolled yet.
//           </p>
//         )}
//       </div>

//       {/* Edit Form */}
//       {editStudent && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Edit Student</h2>
//             <input
//               type="text"
//               className="w-full p-2 mb-4 border border-gray-300 rounded"
//               placeholder="Name"
//               value={studentDetails.name}
//               onChange={(e) => setStudentDetails({ ...studentDetails, name: e.target.value })}
//             />
//             <input
//               type="email"
//               className="w-full p-2 mb-4 border border-gray-300 rounded"
//               placeholder="Email"
//               value={studentDetails.email}
//               onChange={(e) => setStudentDetails({ ...studentDetails, email: e.target.value })}
//             />
//             <input
//               type="text"
//               className="w-full p-2 mb-4 border border-gray-300 rounded"
//               placeholder="Phone"
//               value={studentDetails.phone}
//               onChange={(e) => setStudentDetails({ ...studentDetails, phone: e.target.value })}
//             />
//             <input
//               type="text"
//               className="w-full p-2 mb-4 border border-gray-300 rounded"
//               placeholder="Course"
//               value={studentDetails.coursename}
//               onChange={(e) => setStudentDetails({ ...studentDetails, coursename: e.target.value })}
//             />
//             <div className="flex justify-between">
//               <button
//                 onClick={handleSave}
//                 className="bg-blue-500 text-white py-2 px-4 rounded"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setEditStudent(null)}
//                 className="bg-gray-500 text-white py-2 px-4 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EnrolledStudents;


import React, { useEffect } from "react";
import { stderollemntstore } from "../../store/stdenrollemntstore";
import axios from "axios";

const EnrolledStudents = () => {
  const { stdenrolls, loading, getenrolledstd } = stderollemntstore();

  useEffect(() => {
    getenrolledstd(); // Fetch enrolled students when the component mounts
  }, [getenrolledstd]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/removestudent/${id}`);
      getenrolledstd(); // Refetch the students list after deletion
    } catch (error) {
      console.log("Error deleting student:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Enrolled Students
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stdenrolls && stdenrolls.length > 0 ? (
          stdenrolls.map((student, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {student.name}
              </h2>
              <p className="text-sm text-gray-500">
                <strong>Email:</strong> {student.email}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Course:</strong> {student.coursename}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Phone:</strong> {student.phone}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleDelete(student._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No students enrolled yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default EnrolledStudents;
