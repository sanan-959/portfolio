import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Sanan Nawaz</h3>
            <p className="text-gray-400">
              Full Stack developer, specializing in web and software Developing.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form action="" className="flex items-center justify-center">
                <input type="email" placeholder="Enter Email" className="w-full p-2 rounded-1-lg bg-gray-800 border 
                        border-gray-600 focus:outline-none focus:border-green-400" />
                <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
                >Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between
        items-center">
            <p className="text-gray-400">
                &copy;  {new Date().getFullYear()}
            </p>
            <div className="flex space-x-4 my-4 md:my-0">
                <a href="https://www.linkedin.com/in/sanan959" className="text-gray-400 hover:text-white" target="_blank"
                 rel="noopener noreferrer"><FaLinkedin/></a>
                <a href="https://github.com/sanan-959" className="text-gray-400 hover:text-white" target="_blank"
  rel="noopener noreferrer"><FaGithub/></a>
                <a href="https://x.com/sanan_959" className="text-gray-400 hover:text-white" target="_blank"
  rel="noopener noreferrer"><FaTwitter/></a>
            </div>
            <div className="flex space-x-4">
                <a href="" className="text-gray-400 hover:text-white">Privacy</a>
                <a href="" className="text-gray-400 hover:text-white">Terms of Services</a>
            </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
