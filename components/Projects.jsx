import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import KeeperImg from '../public/assets/projectImgs/keeper.png';
import JournalImg from "../public/assets/projectImgs/daily-journal.png";
import ExpressTodo from "../public/assets/projectImgs/express-todo.png";
import ReactTodo from "../public/assets/projectImgs/react-todo.png";
import Newsletter from "../public/assets/projectImgs/newsletter.png";
import Simon from "../public/assets/projectImgs/simon.png"
import ProjectItemND from './ProjectItemND';
import ProjectItemD from './ProjectItemD';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#40826B]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItemND
            title='Notes Keeper'
            backgroundImg={KeeperImg}
            projectUrl='https://github.com/aaronstapleton/Keeper-Notes.git'
            tech='React JS, Firebase Authentification, Firebase Firestore'
          />
          <ProjectItemD 
              title="Daily Journal"
              backgroundImg={JournalImg}
              githubUrl="https://github.com/aaronstapleton/Daily-Journal.git"
              deployedUrl="https://daily-journal-aaronstapleton.herokuapp.com"
              tech="Express JS, Node JS, MongoDB, EJS"
          />
            <ProjectItemD 
              title="Express-Based TodoList"
              backgroundImg={ExpressTodo}
              githubUrl="https://github.com/aaronstapleton/Express-based-TodoList.git"
              deployedUrl="https://cryptic-fjord-97328.herokuapp.com"
              tech="Express JS, Node JS, MongoDB, EJS"
          />
                      <ProjectItemD 
              title="React-Based TodoList"
              backgroundImg={ReactTodo}
              githubUrl="https://github.com/aaronstapleton/React-based-TodoList.git"
              deployedUrl="https://react-todolist-7a29f.web.app"
              tech="React JS"
          />
                      <ProjectItemD 
              title="Newletter Signup"
              backgroundImg={Newsletter}
              githubUrl="https://github.com/aaronstapleton/Newsletter.git"
              deployedUrl="https://cryptic-dusk-21768.herokuapp.com"
              tech="Bootstrap, Mailchimp API"
          />
                      <ProjectItemND 
              title="Simon Says Game"
              backgroundImg={Simon}
              projectUrl="https://github.com/aaronstapleton/Simon-Game.git"
              tech="Html, Css, Javascript"
          />

        

        </div>
      </div>
    </div>
  );
};

export default Projects;