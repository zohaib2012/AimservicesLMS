

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { stderollemntstore } from "../../store/stdenrollemntstore";

const Graphicedesisning = () => {
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


            <img className="w-full h-96" src="/public/WhatsApp Image 2024-12-12 at 16.04.39.jpeg" alt="" />
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
       
            {/* <body class="bg-gray-50 text-gray-900"> */}

{/* <!-- Header Section --> */}
<header class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl font-extrabold">Graphic Designing Course</h1>
        <p class="text-xl mt-4">Learn the essential graphic design tools and techniques from industry experts</p>
        <p class="mt-2 text-lg">Master Adobe Illustrator, Adobe Photoshop, Adobe XD, Canva, and CorelDraw to unlock your creative potential!</p>
    </div>
</header>

{/* <!-- Course Overview --> */}
<section class="py-16 px-6 bg-white">
    <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-900">Course Overview</h2>
        <p class="mt-4 text-lg text-gray-700">This course is designed for aspiring graphic designers to master the top graphic design tools. From vector art to web and mobile app design, you'll gain hands-on experience with the industry-standard software used by professionals worldwide.</p>
    </div>
</section>

{/* <!-- Course Topics --> */}
<section class="py-16 px-6 bg-gray-100">
    <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-semibold text-center text-gray-900 mb-8">Course Topics</h2>
        <ul class="space-y-4">
            <li class="text-xl text-gray-700">
                <strong class="text-gray-900">1. Adobe Illustrator</strong>
                <p class="mt-2">Learn vector graphics and illustrations, logo creation, and advanced techniques to bring your designs to life.</p>
            </li>
            <li class="text-xl text-gray-700">
                <strong class="text-gray-900">2. Adobe Photoshop</strong>
                <p class="mt-2">Master image editing, photo manipulation, and digital artwork creation with Photoshop.</p>
            </li>
            <li class="text-xl text-gray-700">
                <strong class="text-gray-900">3. Adobe XD</strong>
                <p class="mt-2">Design user interfaces (UI) and user experiences (UX) for websites and mobile apps using Adobe XD.</p>
            </li>
            <li class="text-xl text-gray-700">
                <strong class="text-gray-900">4. Canva</strong>
                <p class="mt-2">Create professional designs quickly with Canva for social media, marketing, presentations, and more.</p>
            </li>
            <li class="text-xl text-gray-700">
                <strong class="text-gray-900">5. CorelDraw</strong>
                <p class="mt-2">Explore vector design with CorelDraw for various applications including print and web design.</p>
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
                <h3 class="text-xl font-semibold text-gray-900">Hands-on Training</h3>
                <p class="text-lg text-gray-700">Work on real-life projects and build a portfolio that showcases your skills.</p>
            </div>
            <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900">Experienced Instructors</h3>
                <p class="text-lg text-gray-700">Learn from seasoned graphic designers with years of industry experience.</p>
            </div>
            <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900">Flexible Learning</h3>
                <p class="text-lg text-gray-700">Access online lessons anytime, anywhere, with flexible scheduling options.</p>
            </div>
        </div>
    </div>
</section>

{/* <!-- Contact Section --> */}
<section class="py-16 px-6 bg-gray-900 text-white">
    <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-semibold">Get Started Today!</h2>
        <p class="mt-4 text-lg">Ready to begin your graphic design journey? Sign up now and take the first step toward becoming a skilled designer.</p>
        <a href="/contact" class="mt-6 inline-block bg-white text-gray-900 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-100">Contact Us</a>
    </div>
</section>

            </div>
        </div>
    );
};

export default Graphicedesisning;

