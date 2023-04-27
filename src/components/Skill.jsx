import React, { useState } from "react";
import Container from "./Container";
import Progress from "react-circle-progress-bar";

const Skill = () => {
  const [skill, setSkill] = useState({ count: 0, text: "Nothing" });
  return (
    <Container id="skill" classs="flex justify-center item-center flex-col">
      <div className="w-4/5 mx-auto max-md:w-full">
        <h1 className="text-center text-3xl font-semibold text-slate-700">
          Skills
        </h1>
        <div className="flex justify-center flex-row gap-x-10 mt-5 max-md:flex-col gap-y-7 max-md:mt-10">
          <div className="grid grid-cols-3 justify-center gap-3 mt-3 max-md:grid-cols-2 px-4 max-md:order-2">
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 55, text: "Html" })}
            >
              Html
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 70, text: "Css" })}
            >
              Css
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 80, text: "Boostrap" })}
            >
              Boostrap
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 75, text: "Tailwind" })}
            >
              Tailwind
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 70, text: "JavaScript" })}
            >
              JavaScript
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 77, text: "TypeScript" })}
            >
              TypeScript
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 88, text: "React Js" })}
            >
              React Js
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 70, text: "Node Js" })}
            >
              Node Js
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 67, text: "PHP" })}
            >
              PHP
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 81, text: "Laravel" })}
            >
              Laravel
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 70, text: "Git" })}
            >
              Git
            </a>
            <a
              className="bg-white p-3 rounded shadow-md text-center transition-all duration-500 hover:bg-transparent text-lg font-medium cursor-pointer backdrop-blur-lg bgop w-full px-6"
              onClick={() => setSkill({ count: 80, text: "GitHub" })}
            >
              GitHub
            </a>
          </div>
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-3xl text-gray-700">{skill.text}</h1>
            <Progress
              progress={skill.count}
              className="w-64"
              subtitle={skill.text}
              transitionDuration={0.6}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skill;
