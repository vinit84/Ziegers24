import React from 'react'
import banner from '../../src/assets/contactbanner.svg';
import Team from './Team';
import Footer from './Footer';
import transition from '../transition';

const About = () => {
  return (
    <div className='wrapper overflow-x-hidden max-w-screen'>
      <div>
        <div className='text-white text-center font-varino text-[70px] mt-10 m-contactus m-aboutus'>ABOUT US</div>
        <img src={banner} alt='contactbanner' className='w-screen translate-y-4 m-contact-banner' />
        <div className=''>
          <div className='flex flex-col justify-center absolute top-[15rem] items-center gap-7 w-screen'>
            <div className='text-white z-1 border border-solid border-[#E5E7EB] font-readex text-[30px] text-center font-bold rounded-full py-1 px-6 m-welcome-zieger'>Welcome to Ziegers 2024</div>
            <div className='text-[#C9CACB] text-[20px] font-readex text-center w-[800px] m-welcome-zieger-text'>
              Ziegers is the annual festival of the Computer Science Department. 
              At Ziegers, students are provided with the opportunity to participate and prove their talents and technical skills. 
            </div>
          </div>
          <div className='flex flex-col justify-center absolute top-[31rem] items-center gap-7 w-screen m-mainobjective'>
            <div className='text-white top-[15.5rem] z-1 border border-solid border-[#E5E7EB] font-readex text-[30px] text-center font-bold rounded-full py-1 px-6 m-main-objective'>Main Objective</div>
            <div className='text-[#C9CACB] top-[21rem] text-[20px] font-readex text-center w-[800px] m-main-objective-text'>
              Ziegers is to help students to explore the practical dimensions of this field. At Ziegers we are here to celebrate 
              a festival which is a perfect blend of fun and technical events to promote talent and provide opportunities to students 
              to develop and enhance their skills. At Ziegers 2024, to celebrate 21 years of Ziegers, we cordially invite you to the 
              universe of Ziegers and join us in resolving the Cosmic Mystery of Alien Invasion. 
            </div>
          </div>
          <div className='mt-[35rem] lg:mt-[30rem]'>
          <Team/>
        </div>
        </div>
       
      </div>
      <div className="flex mt-[5rem]">

      <Footer/>
      </div>
    </div>
    
  )
}

export default transition(About);