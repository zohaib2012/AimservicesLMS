

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { stderollemntstore } from "../../store/stdenrollemntstore";

const Videoediting = () => {
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


            <img className="w-full h-96" src="/public/WhatsApp Image 2024-12-12 at 16.41.46.jpeg" alt="" />
            <div className="bg-gradient-to-r min-h-screen flex items-center justify-center px-4 py-12">




                <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                    {/* Left Column */}
                    <div className="hidden md:block md:w-1/2 bg-cover bg-center" >
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
            <div>


            <header class="bg-gray-900 text-white py-12">

            <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-extrabold">Video Editing Course</h1>
            <p class="text-xl mt-4">Master the art of video editing with top industry software</p>
            <p class="mt-2 text-lg">Learn Adobe Premiere, After Effects, Filmora, and CapCut to bring your video editing skills to the next level!</p>
        </div>
    </header>

    {/* <!-- Course Overview --> */}
    <section class="py-16 px-6 bg-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-900">Course Overview</h2>
            <p class="mt-4 text-lg text-gray-700">Our video editing course is designed for both beginners and advanced learners. You will gain proficiency in top-tier video editing software, learn advanced techniques, and apply them to create stunning videos for YouTube, social media, and professional projects.</p>
        </div>
    </section>

    {/* <!-- Course Topics --> */}
    <section class="py-16 px-6 bg-gray-100">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold text-center text-gray-900 mb-8">Course Topics</h2>
            <ul class="space-y-4">
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">1. Adobe Premiere Pro</strong>
                    <p class="mt-2">Master video editing with Adobe Premiere, from basic cutting and transitions to advanced effects and color correction.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">2. Adobe After Effects</strong>
                    <p class="mt-2">Learn motion graphics, special effects, compositing, and animation techniques to enhance your videos with After Effects.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">3. Filmora</strong>
                    <p class="mt-2">Use Filmora for quick and easy video editing with a focus on simplicity, creative filters, and effects suitable for beginners and intermediate users.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">4. CapCut</strong>
                    <p class="mt-2">Create professional videos using CapCut, a popular mobile app, with an emphasis on speed, creativity, and social media video trends.</p>
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
                    <h3 class="text-xl font-semibold text-gray-900">Hands-on Practice</h3>
                    <p class="text-lg text-gray-700">Work on real video projects, from simple edits to complex animations, to build your portfolio.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Expert Instructors</h3>
                    <p class="text-lg text-gray-700">Learn from experienced video editors who have worked on professional and creative video projects.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Flexible Learning</h3>
                    <p class="text-lg text-gray-700">Take advantage of online lessons and tutorials available anytime, allowing you to learn at your own pace.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section class="py-16 px-6 bg-gray-900 text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold">Get Started Today!</h2>
            <p class="mt-4 text-lg">Ready to dive into the world of video editing? Enroll now and start creating amazing videos.</p>
            <a href="/contact" class="mt-6 inline-block bg-white text-gray-900 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-100">Contact Us</a>
        </div>
    </section>

            </div>
        </div>
    );
};

export default Videoediting;

