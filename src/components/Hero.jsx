import React from "react";
import hero from "../assets/images/IMG_6456.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  // const social_media = [
  //   "logo-instagram",
  //   // "logo-facebook",
  //   "logo-linkedin",
  // ];

  const social_media = [
    {
      name: "logo-instagram",
      link: "https://instagram.com/naimish_gadhiya_0701?igshid=OTk0YzhjMDVlZA==",
    },
    {
      name: "logo-linkedin",
      link: "https://www.linkedin.com/in/naimish-gadhiya-426bba214",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="md:w-11/12 h-full object-cover"
          style={{ height: "50%", width: "40%" }}
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is{" "}
            <span style={{ color: "rgb(238,174,202)" }}>Naimish Gadhiya</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            MERNstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.link}>
                  <ion-icon name={icon.name}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
