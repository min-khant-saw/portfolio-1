import React from 'react'
import Container from './Container'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

const Home = () => {
  return (
    <Container
      id="home"
      classs="flex justify-center item-center flex-col h-screen bg-cover bg-no-repeat bg-left-top max-md:bg-right-top"
      img={'bg.png'}
    >
      <div className="w-full mx-auto flex justify-center gap-x-16 items-center max-md:flex-col max-md:gap-y-5">
        <div className="max-md:order-2 text-center">
          <h1 className="text-4xl font-semibold text-slate-700 max-md:text-2xl">
            I'm Min Khant Saw
          </h1>
          <p className="mt-1 text-gray-600">Web Developer</p>
          {/* <div className="flex justify-center items-center my-2">
            <a
              className="bg-blue-600 p-2 py-2.5 text-stone-100 rounded-md text-center text-sm"
              href="https://drive.google.com/file/d/1fxuiUIIH6XpJ0lpatTYRjW7T6Ja98p2h/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div> */}
          <a
            href="#about"
            className="flex justify-center items-center w-full mt-2 ml-1 text-gray-800 text-xs text-center"
          >
            Scroll Down
            <KeyboardArrowDownRoundedIcon color="info" />
          </a>
        </div>
        <div>
          <img
            src="mks3.jpg"
            alt="profile"
            className="w-60 h-60 object-cover object-top rounded-full max-md:w-48 max-md:h-48"
          />
        </div>
      </div>
    </Container>
  )
}

export default Home
