import React from "react";
// import aboutImg from "../assets/images/about.png";
const About = () => {

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am a Full stack Developer I have done my Coruse of web Development & web designing 
               I can provide clean code and pixel perfect design.
                A responsive design makes Your website accessible to all users, 
                regardless of their device.
                
              </p>
              <br />
              <br />
              <a href="./src/assets/Naimish-cv.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
           {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
               <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              /> 
            </div>
          </div>  */}
        </div>
      </div>
    </section>
  );
};

export default About;
