import React, { useState } from "react";
import { useCoursestore } from "../../store/useCoursestore";
// import { useCoursestore } from "./store/coursestore"; // Import your Zustand store

const AddCourseForm = () => {
  const { addcourse, loading } = useCoursestore(); // Zustand's addcourse function
  const [title, setTitle] = useState(""); // State for title
  const [description, setDescription] = useState(""); // State for description

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Course data to send
    const coursesdata = {
      title,
      description,
    };

    // Call the Zustand store's addcourse function
    await addcourse(coursesdata);

    // Clear form fields after submission
    setTitle("");
    setDescription("");
  };

  return (
    <div className=" m-10 mt-14 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Course</h2>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="title">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full py-2 px-3"
            placeholder="Enter course title"
            required
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Course Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded w-full py-2 px-3"
            placeholder="Enter course description"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-64 text-center  rounded"
          disabled={loading} // Disable button when loading is true
        >
          {loading ? "Adding Course..." : "Add Course"}
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;
