import React from 'react'
import Container from './Container'
import InfoBox from './InfoBox'

const About = () => {
  return (
    <Container id="about" classs="flex justify-center item-center flex-col">
      <h1 className="text-4xl font-medium text-center text-slate-700">About</h1>
      <InfoBox
        title="About"
        image="mks.jpg"
        infoOne={`Hi, I'm a full stack web developer specializing in creating
              high-quality websites with a focus on great design and usability.
              I'm passionate about my work and love collaborating with teams to
              create successful projects.`}
        infoTwo={`One of my strongest skills is my ability to work collaboratively
              with teams and effectively manage projects. I enjoy working with
              others to create a cohesive and successful end product.`}
        infoThree={`If you're looking for a skilled web developer who can bring your
              vision to life, I'm here to help. Let's work together to create a
              website that will impress your audience and help your business
              grow.`}
      />
    </Container>
  )
}

export default About
