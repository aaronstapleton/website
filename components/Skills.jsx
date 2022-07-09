import Image from "next/image";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFireAlt,
  FaGithub,
  FaPython,
  FaBootstrap,
  FaJava,
  FaJsSquare
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#40826B]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <IconContext.Provider value={{ size: 50 }}>
                <div className="m-auto">
                  <FaHtml5 />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <IconContext.Provider value={{ size: 50 }}>
                <div className="m-auto">
                  <FaCss3Alt />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <IconContext.Provider value={{ size: 50 }}>
                <div className="m-auto">
                  <FaJsSquare />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col items-center justify-center">
                <h3>JS ES6</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <IconContext.Provider value={{ size: 50 }}>
                <div className="m-auto">
                  <FaReact />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col items-center justify-center">
                <h3>React.js</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <IconContext.Provider value={{ size: 50 }}>
                <div className="m-auto">
                  <FaNodeJs />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <IconContext.Provider value={{ size: 50 }}>
                <div className="m-auto">
                  <FaFireAlt />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <IconContext.Provider value={{ size: 50 }}>
                <div className="m-auto">
                  <FaGithub />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col items-center justify-center">
                <h3>Git/Github</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <IconContext.Provider value={{ size: 50 }}>
                <div className="m-auto">
                  <FaPython />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <IconContext.Provider value={{ size: 50 }}>
                <div className="m-auto">
                  <FaBootstrap />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <IconContext.Provider value={{ size: 50 }}>
                <div className="m-auto">
                  <FaJava />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>
          

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>TailwindCSS</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>Express.js</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>Bash</h3>
            </div>
          </div>



          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>EJS</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>WebAPIs</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>SQL</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>NoSQL</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>MongoDB</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>Mongooose</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>jQuery</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center py-3">
              <h3>DOM</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
