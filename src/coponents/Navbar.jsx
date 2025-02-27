import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div>

      <div className='w-full h-10 border-2 border-black bg-gray-900 flex justify-evenly'>
        <div className='text-white m-1'>
          <i class="fa-solid fa-envelope mx-2">


          </i>
          aimservicess123@gmail.com
        </div>
        <div className='text-gray-900 m-1 '>
          <i class="fa-solid fa-phone mx-2">

          </i>
          +92 300 4323657
        </div>
        <div className='text-white m-1 '>
          <i class="fa-solid fa-phone mx-2">

          </i>
          +92 300 4323657
        </div>

        {/* <div>
          <Link to={"/enrollenmentform"}>
            <button className='w-24 h-8 rounded-lg m-1 bg-red-600 float-end hover:bg-white hover:text-red-600 text-white border-2 border-black'>Enroll Now</button>
          </Link>
        </div> */}
      </div>
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-center">
            <img style={{ width: 70, height: 60 }} src="/public/Untitled design (1).png" className="mr-3 sm:h-9" alt="Landwind Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
          <div className="flex items-client/public/Untitled design.pngcenter lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span />
            </div>
            <Link to="/Enrollemnetform" className=" w-fit text-center text-white bg-green-800 hover:bg-green-950 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Enroll Now</Link>
            <button data-collapse-toggle="mobile-menu-2" type="button" className=" inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="true">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <Link to="/registeration" className="mx-3 w-fit text-white bg-gray-800 hover:bg-gray-950 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Register Now</Link>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="true">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/" className=" block py-2 pl-3 pr-4 text-white bg-red-600 rounded lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
              </li>
              {/* <li>
          <Link to="/coursess" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Courses</Link>
        </li> */}


              <ul className="flex space-x-4">



                {/* Courses Dropdown */}
                <li className="relative z-10 group">
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Courses
                  </Link>
                  {/* Dropdown Menu */}
                  <ul className="absolute left-0 hidden mt-2 w-48 bg-white shadow-md rounded-md group-hover:block dark:bg-gray-800">
                    <li>
                      <Link
                        to="/webdevelopment"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Web Development
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/graphicdesigning"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Graphic Designing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ecommerce"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Ecommerce
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/digitalmarketing"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Digitalmarketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/seo"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Seo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Videoediting"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Video Editing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/wordpress"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Wordpress
                      </Link>
                    </li>

                  </ul>
                </li>
              </ul>

              {/* <li>
                <Link to="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</Link>
              </li>
              <li>
                <Link to="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</Link>
              </li> */}
              <li>
                <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
