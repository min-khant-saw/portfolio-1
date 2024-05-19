import React from 'react'
import Container from './Container'

const InfoBox = ({
  title = '',
  image = '',
  imageObject = 'cover',
  infoOne = '',
  infoTwo = '',
  infoThree = '',
}) => {
  return (
    <Container
      id={title.toLowerCase()}
      classs="flex justify-center item-center flex-col"
    >
      <div className="w-full flex justify-center flex-row gap-x-4 mt-9 max-md:flex-col max-md:gap-y-4">
        <img
          src={image}
          alt={title.toLowerCase()}
          className={`w-[450px] h-[400px] max-md:w-[360px] max-md:h-[300px] object-${imageObject} border-[5px] border-stone-50 rounded-lg grayscale-[22%] max-md:mx-auto transition-all duration-300 overflow-hidden hover:grayscale-0 cursor-pointer`}
        />
        <div className="bg-transparent w-2/5 max-md:w-[90%] max-md:mx-auto ml-4">
          <ul className="flex justify-center flex-col gap-y-4">
            <li className="bg-white text-lg shadow-md p-3 rounded w-full max-md:w-full backdrop-blur-2xl bg-opacity-40 text-gray-900 transition-all duration-500 cursor-pointer hover:translate-x-3 max-md:hover:translate-x-0 max-md:hover:-translate-y-2">
              {infoOne}
            </li>
            <li className="bg-white text-lg shadow-md p-3 rounded w-full max-md:w-full backdrop-blur-2xl bg-opacity-40 text-gray-900 transition-all duration-500 cursor-pointer hover:translate-x-3 max-md:hover:translate-x-0 max-md:hover:-translate-y-2">
              {infoTwo}
            </li>
            <li className="bg-white text-lg shadow-md p-3 rounded w-full max-md:w-full backdrop-blur-2xl bg-opacity-40 text-gray-900 transition-all duration-500 cursor-pointer hover:translate-x-3 max-md:hover:translate-x-0 max-md:hover:-translate-y-2">
              {infoThree}
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default InfoBox
