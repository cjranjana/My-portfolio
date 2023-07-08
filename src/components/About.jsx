import photo from '../assets/projects/photome1.jpg'
import React from 'react';
import '../index.css'


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
        
          <div className='flex justify-center items-center mt-8'>
            <div
              className='photo-wrapper'
              style={{
                width: '200px',
                height: '200px',
                transition: 'opacity 0.3s ease',
              }}
            >
              <img
                src={photo}
                alt='Your Name'
                className='rounded-full photo'
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  opacity: '0.8',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
              />
            </div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          
          
          <div>
            <p>
              I'm a frontend developer with a deep enthusiasm for creating captivating user experiences.
              I'm also a devoted machine learning enthusiast, constantly exploring its potential to revolutionize the digital landscape.
              I believe in the magic of clean design, seamless interactions, and pixel-perfect details. Let's collaborate and bring cutting-edge solutions to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};





export default About;