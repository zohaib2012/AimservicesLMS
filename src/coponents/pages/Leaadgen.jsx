

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { stderollemntstore } from "../../store/stdenrollemntstore";

const Leaadgen = () => {
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


            <img className="w-full h-96" src="/public/WhatsApp Image 2024-12-12 at 17.01.29.jpeg" alt="" />
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
               
            {/* <!-- Header Section --> */}
    <header class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-extrabold">SEO Course</h1>
            <p class="text-xl mt-4">Learn how to optimize websites for search engines and increase your site’s visibility with proven SEO strategies!</p>
            <p class="mt-2 text-lg">Master both on-page and off-page SEO, learn keyword research, technical SEO, and analytics to drive traffic and rank higher on search engines.</p>
        </div>
    </header>

    {/* <!-- Course Overview --> */}
    <section class="py-16 px-6 bg-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-900">Course Overview</h2>
            <p class="mt-4 text-lg text-gray-700">This course is designed to take you from the basics of SEO to advanced strategies. You will learn how to conduct keyword research, optimize your website's content, and improve your site's technical aspects for better rankings on search engines like Google.</p>
        </div>
    </section>

    {/* <!-- Course Topics --> */}
    <section class="py-16 px-6 bg-gray-100">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold text-center text-gray-900 mb-8">Course Topics</h2>
            <ul class="space-y-4">
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">1. Introduction to SEO</strong>
                    <p class="mt-2">Learn the fundamentals of SEO, why it's important for online visibility, and the basics of how search engines work.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">2. Keyword Research</strong>
                    <p class="mt-2">Understand how to identify valuable keywords, use keyword research tools, and analyze search intent to target the right audience.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">3. On-Page SEO</strong>
                    <p class="mt-2">Learn how to optimize individual pages of your website, including title tags, meta descriptions, headings, and internal linking for better rankings.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">4. Technical SEO</strong>
                    <p class="mt-2">Understand website structure, site speed optimization, mobile optimization, and crawlability issues to improve search engine ranking.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">5. Off-Page SEO</strong>
                    <p class="mt-2">Learn how to build backlinks, leverage social media for SEO, and create partnerships that boost your website's authority.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">6. Local SEO</strong>
                    <p class="mt-2">Master the techniques for improving your website’s visibility in local search results and setting up Google My Business effectively.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">7. SEO Analytics and Tools</strong>
                    <p class="mt-2">Learn how to use SEO tools like Google Analytics, Google Search Console, SEMrush, and Ahrefs to track performance and optimize strategies.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">8. SEO Content Strategy</strong>
                    <p class="mt-2">Create an effective content marketing strategy that includes blog posts, videos, infographics, and more to improve search rankings.</p>
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
                    <h3 class="text-xl font-semibold text-gray-900">Proven SEO Techniques</h3>
                    <p class="text-lg text-gray-700">Learn the latest SEO strategies that are proven to work. We focus on actionable steps and up-to-date techniques to boost rankings.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Hands-on Experience</h3>
                    <p class="text-lg text-gray-700">Get hands-on with real-world SEO projects. You'll apply what you learn and see immediate improvements in search engine results.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Comprehensive Coverage</h3>
                    <p class="text-lg text-gray-700">This course covers every aspect of SEO—on-page, off-page, technical, and analytics. It's the most complete SEO training you can get!</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section class="py-16 px-6 bg-gray-900 text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold">Get Started with SEO Today!</h2>
            <p class="mt-4 text-lg">Want to dominate search engine rankings and drive more traffic to your website? Sign up today and start your journey to mastering SEO!</p>
            <a href="/contact" class="mt-6 inline-block bg-white text-gray-900 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-100">Contact Us</a>
        </div>
    </section>

            </div>
        </div>
    );
};

export default Leaadgen;

