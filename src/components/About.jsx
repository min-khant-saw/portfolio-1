import React from "react";
import Container from "./Container";

const About = () => {
  return (
    <Container id="about" classs="flex justify-center item-center flex-col">
      <h1 className="text-4xl font-medium text-center text-slate-700">About</h1>
      <div className="w-full flex justify-center flex-row gap-x-4 mt-9 max-md:flex-col max-md:gap-y-4">
        <img
          src="mks.jpg"
          alt="about"
          className="w-[450px] h-[400px] max-md:w-[360px] max-md:h-[300px] object-cover border-[5px] border-stone-50 rounded-lg grayscale-[22%] max-md:mx-auto transition-all duration-300 overflow-hidden hover:grayscale-0 cursor-pointer"
        />
        <div className="bg-transparent w-2/5 max-md:w-[90%] max-md:mx-auto ml-4">
          <ul className="flex justify-center flex-col gap-y-4">
            <li className="bg-white text-lg shadow-md p-3 rounded w-full max-md:w-full backdrop-blur-2xl bg-opacity-40 text-gray-900 transition-all duration-500 cursor-pointer hover:translate-x-3 max-md:hover:translate-x-0 max-md:hover:-translate-y-2">
              Hi, I'm a full stack web developer specializing in creating
              high-quality websites with a focus on great design and usability.
              I'm passionate about my work and love collaborating with teams to
              create successful projects.
            </li>
            <li className="bg-white text-lg shadow-md p-3 rounded w-full max-md:w-full backdrop-blur-2xl bg-opacity-40 text-gray-900 transition-all duration-500 cursor-pointer hover:translate-x-3 max-md:hover:translate-x-0 max-md:hover:-translate-y-2">
              One of my strongest skills is my ability to work collaboratively
              with teams and effectively manage projects. I enjoy working with
              others to create a cohesive and successful end product.
            </li>
            <li className="bg-white text-lg shadow-md p-3 rounded w-full max-md:w-full backdrop-blur-2xl bg-opacity-40 text-gray-900 transition-all duration-500 cursor-pointer hover:translate-x-3 max-md:hover:translate-x-0 max-md:hover:-translate-y-2">
              If you're looking for a skilled web developer who can bring your
              vision to life, I'm here to help. Let's work together to create a
              website that will impress your audience and help your business
              grow.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
