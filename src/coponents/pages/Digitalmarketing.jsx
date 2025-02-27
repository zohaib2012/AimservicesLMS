

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { stderollemntstore } from "../../store/stdenrollemntstore";

const Digitalmarketing = () => {
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


            <img className="w-full h-96" src="/public/WhatsApp Image 2024-12-12 at 18.00.12.jpeg" alt="" />
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
            <div>
                {/* <div class="text-center my-8"> */}
                    {/* <h1 class="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Our Learning Platform</h1> */}


                    {/* <header class="bg-blue-600 text-white py-12">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-extrabold">Digital Marketing Course</h1>
            <p class="text-xl mt-4">Master key digital marketing skills with expert-led training</p>
            <p class="mt-2 text-lg">Boost your career and learn SEO, social media marketing, content creation, email marketing, and more!</p>
        </div>
    </header> */}

    {/* <!-- Course Overview --> */}
    {/* <section class="py-16 px-6 bg-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-800">Course Overview</h2>
            <p class="mt-4 text-lg text-gray-700">This comprehensive course covers all essential aspects of digital marketing. Whether you're new to the field or looking to sharpen your skills, our curriculum is designed to help you succeed in today’s fast-paced digital world.</p>
        </div>
    </section> */}

    {/* <!-- Course Topics --> */}
    {/* <section class="py-16 px-6 bg-gray-100">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">Course Topics</h2>
            <ul class="space-y-4">
                <li class="text-xl text-gray-700">
                    <strong class="text-blue-600">1. Search Engine Optimization (SEO)</strong>
                    <p class="mt-2">Learn how to optimize your website for search engines to improve organic traffic.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-blue-600">2. Social Media Marketing (SMM)</strong>
                    <p class="mt-2">Understand how to leverage social media platforms for marketing success.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-blue-600">3. Social Media Management</strong>
                    <p class="mt-2">Master content scheduling, audience engagement, and tools for managing social media accounts.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-blue-600">4. Email Marketing</strong>
                    <p class="mt-2">Build and execute effective email campaigns to connect with your audience.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-blue-600">5. Content Marketing</strong>
                    <p class="mt-2">Create high-quality content that resonates with your target audience and boosts your brand.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-blue-600">6. Affiliate Marketing</strong>
                    <p class="mt-2">Learn how to set up and manage affiliate programs to expand your brand's reach.</p>
                </li>
            </ul>
        </div>
    </section> */}

    {/* <!-- Why Choose Us --> */}
    {/* <section class="py-16 px-6 bg-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-800 mb-8">Why Choose This Course?</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-blue-600">Expert Instructors</h3>
                    <p class="text-lg text-gray-700">Learn from industry professionals with years of real-world experience.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-blue-600">Flexible Learning</h3>
                    <p class="text-lg text-gray-700">Access course materials anytime, anywhere, with flexible study schedules.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-blue-600">Certification</h3>
                    <p class="text-lg text-gray-700">Receive a digital marketing certificate upon completion to boost your resume.</p>
                </div>
            </div>
        </div>
    </section> */}

    {/* <!-- Contact Section --> */}
    {/* <section class="py-16 px-6 bg-blue-600 text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold">Get Started Today!</h2>
            <p class="mt-4 text-lg">Ready to boost your digital marketing skills? Sign up today and take the first step towards mastering the digital world.</p>
            <a href="mailto:contact@yourdomain.com" class="mt-6 inline-block bg-white text-blue-600 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-100">Contact Us</a>
        </div>
    </section> */}


<header class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-extrabold">Digital Marketing Course</h1>
            <p class="text-xl mt-4">Master key digital marketing skills with expert-led training</p>
            <p class="mt-2 text-lg">Boost your career and learn SEO, social media marketing, content creation, email marketing, and more!</p>
        </div>
    </header>

    {/* <!-- Course Overview --> */}
    <section class="py-16 px-6 bg-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-900">Course Overview</h2>
            <p class="mt-4 text-lg text-gray-700">This comprehensive course covers all essential aspects of digital marketing. Whether you're new to the field or looking to sharpen your skills, our curriculum is designed to help you succeed in today’s fast-paced digital world.</p>
        </div>
    </section>

    {/* <!-- Course Topics --> */}
    <section class="py-16 px-6 bg-gray-100">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold text-center text-gray-900 mb-8">Course Topics</h2>
            <ul class="space-y-4">
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">1. Search Engine Optimization (SEO)</strong>
                    <p class="mt-2">Learn how to optimize your website for search engines to improve organic traffic.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">2. Social Media Marketing (SMM)</strong>
                    <p class="mt-2">Understand how to leverage social media platforms for marketing success.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">3. Social Media Management</strong>
                    <p class="mt-2">Master content scheduling, audience engagement, and tools for managing social media accounts.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">4. Email Marketing</strong>
                    <p class="mt-2">Build and execute effective email campaigns to connect with your audience.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">5. Content Marketing</strong>
                    <p class="mt-2">Create high-quality content that resonates with your target audience and boosts your brand.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">6. Affiliate Marketing</strong>
                    <p class="mt-2">Learn how to set up and manage affiliate programs to expand your brand's reach.</p>
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
                    <h3 class="text-xl font-semibold text-gray-900">Expert Instructors</h3>
                    <p class="text-lg text-gray-700">Learn from industry professionals with years of real-world experience.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Flexible Learning</h3>
                    <p class="text-lg text-gray-700">Access course materials anytime, anywhere, with flexible study schedules.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Certification</h3>
                    <p class="text-lg text-gray-700">Receive a digital marketing certificate upon completion to boost your resume.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section class="py-16 px-6 bg-gray-900 text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold">Get Started Today!</h2>
            <p class="mt-4 text-lg">Ready to boost your digital marketing skills? Sign up today and take the first step towards mastering the digital world.</p>
            <a href="/contact" class="mt-6 inline-block bg-white text-gray-900 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-100">Contact Us</a>
        </div>
    </section>

                </div>

            </div>
        // </div>
    );
};

export default Digitalmarketing;

