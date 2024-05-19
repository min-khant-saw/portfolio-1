import React, { useState } from 'react'
import Container from './Container'
import Progress from 'react-circle-progress-bar'
import Html from './svg/Html'
import Css from './svg/Css'
import BootStrap from './svg/BootStrap'
import Tailwind from './svg/Tailwind'
import JavaScript from './svg/JavaScript'
import TypeScript from './svg/TypeScript'
import ReactJs from './svg/ReactJs'
import NodeJs from './svg/NodeJs'
import Php from './svg/Php'
import Laravel from './svg/Laravel'
import Git from './svg/Git'
import GitHub from './svg/GitHub'
import Docker from './svg/Docker'
import S3 from './svg/S3'

const Skill = () => {
  const [skill, setSkill] = useState({ count: 0, text: 'Nothing' })
  return (
    <Container id="skill" classs="flex justify-center item-center flex-col">
      <div className="w-4/5 mx-auto max-md:w-full">
        <h1 className="text-center text-3xl font-semibold text-slate-700">
          Skills
        </h1>
        <div className="flex justify-center flex-row gap-x-10 mt-5 max-md:flex-col gap-y-7 max-md:mt-10">
          <div className="grid grid-cols-4 justify-center  gap-3 mt-3 max-md:grid-cols-2 px-4 max-md:order-2">
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-orange-300 bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 80, text: 'Html' })}
            >
              <Html />
              <p className="text-sm text-gray-800">Html</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-blue-300 bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 70, text: 'Css' })}
            >
              <Css />
              <p className="text-sm text-gray-800">Css</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-violet-300 bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 80, text: 'Boostrap' })}
            >
              <BootStrap />
              <p className="text-sm text-gray-800">BootStrap</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-sky-300 bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 85, text: 'Tailwind' })}
            >
              <Tailwind />
              <p className="text-sm text-gray-800">Tailwind</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-yellow-300 bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 80, text: 'JavaScript' })}
            >
              <JavaScript />
              <p className="text-sm text-gray-800">JavaScript</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-green-300 bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 85, text: 'Node Js' })}
            >
              <NodeJs />
              <p className="text-sm text-gray-800">NodeJs</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-teal-300 bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 88, text: 'React Js' })}
            >
              <ReactJs />
              <p className="text-sm text-gray-800">React Js</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-blue-300 bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 86, text: 'TypeScript' })}
            >
              <TypeScript />
              <p className="text-sm text-gray-800">TypeScript</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-[#36404D] bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 78, text: 'PHP' })}
            >
              <Php />
              <p className="text-sm text-gray-800">PHP</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-[#FF2D20] bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 81, text: 'Laravel' })}
            >
              <Laravel />
              <p className="text-sm text-gray-800">Laravel</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-black bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 80, text: 'GitHub' })}
            >
              <GitHub />
              <p className="text-sm text-gray-800">GitHub</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-[#F4511E] bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 70, text: 'Git' })}
            >
              <Git />
              <p className="text-sm text-gray-800">Git</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-[#81c15a] bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 70, text: 'Git' })}
            >
              <S3 />
              <p className="text-sm text-gray-800">S3</p>
            </a>
            <a
              className="items-center flex-col md:flex-col border-[2.5px] border-[#0288D1] bg-gray-300 p-3 rounded shadow-md transition-all duration-500 hover:bg-transparent font-medium cursor-pointer backdrop-blur-lg bgop w-full flex justify-center px-6"
              onClick={() => setSkill({ count: 70, text: 'Git' })}
            >
              <Docker />
              <p className="text-sm text-gray-800">Docker</p>
            </a>
          </div>
          {/* <div className="flex justify-center flex-col items-center">
            <h1 className="text-3xl text-gray-700">{skill.text}</h1>
            <Progress
              progress={skill.count}
              className="w-64"
              subtitle={skill.text}
              transitionDuration={0.6}
            />
          </div> */}
        </div>
      </div>
    </Container>
  )
}

export default Skill
