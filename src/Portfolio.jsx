import React from 'react';
import img from '../public/img/young-adult-programmer-typing-computer-office-generated-by-ai.jpg'

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a23] text-white">
      <div className="max-w-4xl w-full px-4 py-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold">Hello, I am <span className="text-red-600">Mark Reccardo</span></h1>
          <p className="mt-4 text-center text-lg md:text-xl">A young UI/UX designer with crazy for mobile & web design.</p>
          <div className="flex mt-6 space-x-4">
            <a href="https://www.behance.net" className="text-2xl"><i className="fab fa-behance"></i></a>
            <a href="https://dribbble.com" className="text-2xl"><i className="fab fa-dribbble"></i></a>
            <a href="https://www.instagram.com" className="text-2xl"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com" className="text-2xl"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.pinterest.com" className="text-2xl"><i className="fab fa-pinterest"></i></a>
          </div>
          <div className="mt-6 space-x-4">
            <button className="bg-red-600 px-6 py-2 rounded text-white">Hire Me</button>
            <button className="border border-white px-6 py-2 rounded text-white">Portfolio</button>
          </div>
        </div>
        <div className="mt-12">
          <img src={img} alt="Mark Reccardo" className="w-full h-auto rounded-lg shadow-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
