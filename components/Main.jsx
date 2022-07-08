import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#40826B]'> Aaron</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Software Engineer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on expanding my skills in both front-end and back-end technologies to create responsive and impactful web applications.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BamzaevbBROOLgzRVfrWUxg%3D%3D'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/aaronstapleton'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='https://drive.google.com/file/d/14rx1xUoSn0nbE50Eo8_gN-KVr6YCpu1P/view?usp=sharing'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;