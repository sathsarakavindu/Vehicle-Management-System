import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer';

function ContactUs() {
  return (
    <>
      <Header/>
      <div className="bg-gray-50 min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Contact Us</h1>

          <div className="text-lg text-gray-700 mb-12">
            <p>
              Have any questions or need assistance? We're here to help! Feel free to reach out to us through the contact
              information provided below, or use the form to get in touch with our team.
            </p>
          </div>

          {/* Help Desk Section */}
          <div className="flex justify-center gap-16 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-[45%] transform transition-all hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Help Desk</h2>
              <p className="text-gray-700 mb-4">
                If you need help, please contact our support team using the contact details below. We aim to respond to all
                queries as quickly as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="material-icons text-blue-500 mr-3">Email</span>
                  <span className="text-gray-700">shankavisal@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="material-icons text-blue-500 mr-3">Phone</span>
                  <span className="text-gray-700">+94 77 1775 703</span>
                </div>
                <div className="flex items-center">
                  <span className="material-icons text-blue-500 mr-3">Location</span>
                  <span className="text-gray-700">Veyangoda, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Your Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-[45%] transform transition-all hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                You can reach out to me directly using the following contact details. I'd love to hear from you and answer any questions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="material-icons text-blue-500 mr-3">Email</span>
                  <a href="mailto:shankavisal@gmail.com" className="text-gray-700 hover:text-blue-600">
                    shankavisal@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="material-icons text-blue-500 mr-3">Phone</span>
                  <span className="text-gray-700">+94 77 1775 703</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Send Us a Message</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="Write your message"
                  rows="4"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
     </> 
  );
}

export default ContactUs;
