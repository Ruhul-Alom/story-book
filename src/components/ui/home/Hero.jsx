import React from 'react';

const Hero = ({blogs}) => {
  console.log(blogs)
  return (
    <div className="hero min-h-[50vh] bg-base-200 flex flex-col lg:flex-row justify-around items-center p-6">
      <div className="lg:w-1/3 w-full flex justify-center lg:justify-end mb-6 lg:mb-0">
        <img 
          src={blogs[0]?.blogImage}
          className="shadow-2xl max-w-full h-auto" 
          alt="Hero"
        />
      </div>
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <p className="font-semibold pr-3">{blogs[0]?.category} <span>{blogs[0]?.date}</span></p>
        <h1 className="text-3xl font-bold">{blogs[0]?.title} </h1>
        <p className="py-4">{blogs[0]?.content}.</p>
        <div className="flex  avatar ">
    <div className=" w-12 h-12 rounded-full">
      <img src={blogs[0]?.authorImage} />
    </div>
    <div>
        <h2 className='font-semibold pr-3'>{blogs[0]?.author}</h2>
        <p>CEO & Founder</p>
    </div>
  </div>
      </div>
    </div>
  );
}

export default Hero;
