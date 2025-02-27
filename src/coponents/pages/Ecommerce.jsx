

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { stderollemntstore } from "../../store/stdenrollemntstore";

const  Ecommerce = () => {
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
                        {/* //  style={{ backgroundImage: "url('/public/WhatsApp Image 2024-12-11 at 12.43.31.jpeg')" }}> */}
                        <img className="h-94 w-96 " src="/public/WhatsApp Image 2024-12-12 at 18.00.12 (1).jpeg" alt="" />
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
            <h1 class="text-5xl font-extrabold">Shopify eCommerce Course</h1>
            <p class="text-xl mt-4">Learn how to build, run, and scale a successful eCommerce store using Shopify, one of the leading platforms for online businesses.</p>
            <p class="mt-2 text-lg">Create your own online store, manage products, optimize for sales, and drive traffic—all using Shopify's powerful tools!</p>
        </div>
    </header>

    {/* <!-- Course Overview --> */}
    <section class="py-16 px-6 bg-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-900">Course Overview</h2>
            <p class="mt-4 text-lg text-gray-700">In this course, you'll learn everything you need to know about building and managing an online store on Shopify. From setting up your store to driving sales, this course provides hands-on experience and expert insights.</p>
        </div>
    </section>

    {/* <!-- Course Topics --> */}
    <section class="py-16 px-6 bg-gray-100">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold text-center text-gray-900 mb-8">Course Topics</h2>
            <ul class="space-y-4">
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">1. Introduction to Shopify</strong>
                    <p class="mt-2">Get familiar with Shopify, its features, and its tools. Learn how to sign up, navigate the dashboard, and start your first store.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">2. Setting Up Your Shopify Store</strong>
                    <p class="mt-2">Step-by-step guidance on setting up a fully functional online store. Choose themes, configure payments, shipping options, and taxes.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">3. Product Management</strong>
                    <p class="mt-2">Learn how to add and manage products, including inventory tracking, product descriptions, images, and categorization.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">4. Shopify Apps and Integrations</strong>
                    <p class="mt-2">Explore Shopify's app store and learn how to integrate third-party apps to enhance the functionality of your store.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">5. Shopify SEO</strong>
                    <p class="mt-2">Learn how to optimize your Shopify store for search engines to increase visibility and drive more organic traffic.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">6. Marketing and Promotion</strong>
                    <p class="mt-2">Discover how to run effective marketing campaigns through social media, email marketing, and paid ads on platforms like Facebook and Instagram.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">7. Shopify Analytics</strong>
                    <p class="mt-2">Learn how to track sales, visitors, and customer behavior using Shopify’s built-in analytics tools to optimize your store's performance.</p>
                </li>
                <li class="text-xl text-gray-700">
                    <strong class="text-gray-900">8. Scaling Your Shopify Store</strong>
                    <p class="mt-2">Learn strategies for growing your online store, from expanding product offerings to managing large volumes of traffic and orders.</p>
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
                    <h3 class="text-xl font-semibold text-gray-900">Hands-on Shopify Experience</h3>
                    <p class="text-lg text-gray-700">Gain real-world experience by building your own Shopify store from scratch. Learn the tools and strategies that top eCommerce brands use.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Expert Guidance</h3>
                    <p class="text-lg text-gray-700">Learn from industry experts who have years of experience in setting up and managing successful Shopify stores.</p>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900">Complete Marketing Strategy</h3>
                    <p class="text-lg text-gray-700">Learn not only how to set up your store but also how to drive traffic and convert visitors into customers using Shopify’s marketing features.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section class="py-16 px-6 bg-gray-900 text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-semibold">Get Started Today!</h2>
            <p class="mt-4 text-lg">Ready to launch your own eCommerce store? Enroll now and start building your Shopify business today!</p>
            <a href="/contact" class="mt-6 inline-block bg-white text-gray-900 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-100">Contact Us</a>
        </div>
    </section>

            </div>
        </div>
    );
};

export default Ecommerce ;

