import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer';

function AboutUs() {
  return (
    <>
      <Header/>
      <div className="bg-gray-50 min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About Us</h1>

          <div className="text-lg text-gray-700 mb-12">
            <p>
              Welcome to our Police Vehicle Management System! We are a team of passionate developers working
              hard to build a robust system for better managing and tracking police vehicles. Our mission is to
              create a seamless experience for users with an intuitive interface and reliable features.
            </p>
          </div>

          <div className="flex justify-center gap-16 mt-12">
          
            <div className="text-center bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocLZztlWADW4TIHu0zA-IUqCF2kNIbmzAkiveRDl-xLLLFES_NEY=s360-c-no" 
                alt="Shanka Visal"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h2 className="text-xl font-semibold text-gray-900">Shanka Visal</h2>
              <p className="text-sm text-gray-600">Founder at Tapro IT | Software Engineer (Web & Mobile)</p>
              <p className="mt-4 text-gray-700">
                I'm passionate about building impactful software that helps solve real-world problems. With a background in web
                development and a love for technology, I'm committed to providing seamless solutions in the Police Vehicle Management
                System.
              </p>
            </div>

            {/* Partner's Info */}
            <div className="text-center bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGCEFGC9zWKSw/profile-displayphoto-shrink_400_400/B56ZPS04KUHIAk-/0/1734408898306?e=1742428800&v=beta&t=NE3k1COhWjUUgBf4RB6h5fhWSzpQxEg-6BoIkzVqlwE" 
                alt="Kavindu Sathsara"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h2 className="text-xl font-semibold text-gray-900">Kavindu Sathsara</h2>
              <p className="text-sm text-gray-600">Software Engineer (Web & Mobile)</p>
              <p className="mt-4 text-gray-700">
                As a passionate web developer, I bring expertise in creating scalable and user-friendly web and mobile systems.
                Together, we aim to revolutionize the way police vehicles are managed with our innovative technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
     </> 
  );
}

export default AboutUs;
