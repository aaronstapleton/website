import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/profile.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#40826B]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>

          <p className='py-2 text-gray-600'>
            For the past 4 years, I have worked in various capacities as a researcher studying
            Data Science and Machine Learning implementing methods such as deep learning,
            signal classification, dimension reduction and estimation, and topological
            data analysis. These projects spanned multiple domains like Neuroscience, Computational
            Chemistry, and Finance. However, I have decided to change career paths
            and pursue a role in Software Engineering!
          </p>
          <p className='py-2 text-gray-600'>
            Through my applied research, I learned to code through Python, R,
            and Matlab and thouroughly enjoyed understanding and implementing 
            algorithms. This sparked my interest in programming and lead me to
            the field of software engineering where I have most recently dedicated
             my time to learning web design through languages and 
            frameworks such as Node.js, React.js, NoSQL, Firebase, and Next.js.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About