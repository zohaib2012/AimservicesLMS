

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { stderollemntstore } from "../../store/stdenrollemntstore";

const Webdeveelopmennt = () => {
    const { enrollstd, loading } = stderollemntstore();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        coursename: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await enrollstd(formData);
    };

    return (
        <div>


            <img className="w-full h-96" src="/public/WhatsApp Image 2024-12-12 at 17.30.51.jpeg" alt="" />
            <div className="bg-gradient-to-r min-h-screen flex items-center justify-center px-4 py-12">




                <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden md:flex">




                    {/* Left Column */}
                    <div className="hidden md:block md:w-1/2 bg-cover bg-center" >
                        {/* //  style={{ backgroundImage: "url('/public/WhatsApp Image 2024-12-11 at 12.43.31.jpeg')" }}> */}
                        <img className="h-94 w-96 " src="/public/online-communication_1098-15842.jpg" alt="" />
                        <div className="flex">

                            <img className="h-44 w-44 m-3 mt-10 rounded-md" src="https://img.freepik.com/free-photo/people-studying-peacefully-library_23-2148844715.jpg?ga=GA1.1.2082760502.1716623693&semt=ais_hybrid" alt="" />
                            <img className="h-44 w-44 m-3 mt-10 rounded-sm" src="https://img.freepik.com/free-photo/diverse-group-students-taking-online-tests_74855-1805.jpg?ga=GA1.1.2082760502.1716623693&semt=ais_hybrid" alt="" />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Student Enrollment</h2>
                        <p className="text-gray-600 mb-8 text-center">Enroll now to kickstart your journey with us!</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
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

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
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

                            {/* Email Address */}
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
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

                            {/* Course Name */}
                            <div>
                                <label htmlFor="coursename" className="block text-gray-700 font-bold mb-2">Course Name</label>
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

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-2 px-4 font-bold text-white rounded-lg shadow-lg focus:outline-none transition-colors duration-300 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-950"
                                        }`}
                                >
                                    {loading ? "Enrolling..." : "Enroll Now"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          
            <header class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-extrabold">MERN Stack Web Development Course</h1>
            <p class="text-xl mt-4">Learn full-stack web development using HTML, CSS, JavaScript, Bootstrap, Tailwind, MongoDB, Express, React, and Node.js</p>
            <p class="mt-2 text-lg">Build modern, dynamic web applications from front-end to back-end with the MERN stack and essential front-end technologies!</p>
        </div>
    </header>

    {/* <!-- Course Overview --> */}
    <section class="py-16 px-6 bg-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-900">Course Overview</h2>
            <p class="mt-4 text-lg text-gray-700">In this course, you’ll learn how to develop full-stack web applications using the MERN stack. The course also covers essential front-end technologies like HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS to help you build fully responsive and modern websites and web applications.</p>
        </div>
    </section>

    {/* <!-- Course Topics --> */}
    <section class="py-16 px-6 bg-gray-100">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold text-center text-gray-900 mb-8">Course Topics</h2>
            <ul class="space-y-4">
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">1. HTML & CSS</strong>
                    <p class="mt-2">Learn the foundation of web development with HTML for structure and CSS for styling. Understand responsive design, layout techniques, and best practices.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">2. JavaScript</strong>
                    <p class="mt-2">Master JavaScript to create dynamic and interactive web pages. Learn about variables, functions, loops, DOM manipulation, and ES6+ features.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">3. Bootstrap & Tailwind CSS</strong>
                    <p class="mt-2">Learn how to use the Bootstrap framework and Tailwind CSS to create responsive, mobile-first web pages quickly and efficiently.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">4. MongoDB</strong>
                    <p class="mt-2">Learn how to use MongoDB, a NoSQL database, to store, retrieve, and manage data efficiently for web applications.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">5. Express.js</strong>
                    <p class="mt-2">Understand how to use Express.js to build scalable back-end applications and APIs. Learn about routing, middleware, and RESTful APIs.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">6. React.js</strong>
                    <p class="mt-2">Learn React.js to build dynamic, single-page applications (SPAs) with reusable components and hooks for efficient state management.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">7. Node.js</strong>
                    <p class="mt-2">Learn how to use Node.js to run JavaScript on the server-side, handle requests, and interact with databases.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">8. Full-Stack Development</strong>
                    <p class="mt-2">Integrate all the technologies to build and deploy full-stack web applications, managing both the front-end and back-end processes.</p>
                </li>
            </ul>
        </div>
    </section>

    {/* <!-- Why Choose Us --> */}
    <section class="py-16 px-6 bg-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-900 mb-8">Why Choose This Course?</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Comprehensive Learning</h3>
                    <p class="text-lg text-gray-700">Learn both front-end and back-end technologies to become a full-stack developer with expertise in the MERN stack and essential front-end tools.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Real-World Projects</h3>
                    <p class="text-lg text-gray-700">Work on real-world projects, building functional websites and applications that will enhance your portfolio and skill set.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Flexible Learning</h3>
                    <p class="text-lg text-gray-700">Access our course materials online anytime, allowing you to learn at your own pace and practice coding exercises and projects.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section class="py-16 px-6 bg-gray-900 text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold">Get Started Today!</h2>
            <p class="mt-4 text-lg">Ready to dive into full-stack web development? Enroll now and start building your web applications with the MERN stack and front-end technologies!</p>
            <a href="/contact" class="mt-6 inline-block bg-white text-gray-900 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-100">Contact Us</a>
        </div>
    </section>

        </div>
    );
};

export default Webdeveelopmennt;

