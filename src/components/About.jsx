import React from "react";
import aboutImage from "../assets/about-img.jpeg";

function About() {
  return (
    <div className="bg-black text-white py-12" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            className="w-72 h-80 rounded-full object-cover mb-8 md:mb-0  transform transition-transform duration-300 hover:scale-110  hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.3)]"
            src={aboutImage}
            alt="Loading..."
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a fouce on building
              modern and responsive web applications. With a strong foundations
              in both frontend and backend technologies, I strive to create
              seamless and efficient user expriences.
            </p>
            
            {/* Progress Bar Section */}

            <div className="space-y-4">
                <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 
                        rounded-full transform transition-transform duration-300 hover:scale-105
                        w-11/12"></div>
                    </div>
                </div>

                <div className="flex items-center">
                    <label htmlFor="reactjs" className="w-2/12">REACT JS</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 
                        rounded-full transform transition-transform duration-300 hover:scale-105
                        w-10/12"></div>
                    </div>
                </div>

                <div className="flex items-center">
                    <label htmlFor="nodejs" className="w-2/12">NODE JS</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 
                        rounded-full transform transition-transform duration-300 hover:scale-105
                        w-9/12"></div>
                    </div>
                </div>

                <div className="flex items-center">
                    <label htmlFor="nodejs" className="w-2/12">GitHub</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 
                        rounded-full transform transition-transform duration-300 hover:scale-105
                        w-10/12"></div>
                    </div>
                </div>

            </div>
            
            {/* Exprience Section */}

            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                    from-green-400 to-blue-500">3+</h3>
                    <p>Months Experience</p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                    from-green-400 to-blue-500">15+</h3>
                    <p>Projects</p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                    from-green-400 to-blue-500">5+</h3>
                    <p>Happy Client</p>
                </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
