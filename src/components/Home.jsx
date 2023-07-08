import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          RANJANA C J
        </h1>
        <h2 className='text-2xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front-End Developer| Machine Learning Enthusiast
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I'm passionate about collaborating with like-minded individuals and organizations to bring visions to life. 
        If you're looking for a frontend developer who's eager to create exceptional user experiences and harness the power of machine learning,
         I'd love to connect and discuss how we can make a meaningful impact together.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
