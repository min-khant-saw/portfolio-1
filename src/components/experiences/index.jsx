import React, { useEffect, useState } from 'react'
import Container from '../Container'
import InfoBox from '../InfoBox'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const Experiences = () => {
  const [date, setDate] = useState()

  // Load English locale data for TimeAgo
  useEffect(() => {
    TimeAgo.addLocale(en)
  }, [])

  useEffect(() => {
    const timeAgo = new TimeAgo('en-US')
    const time = timeAgo.format(new Date('2023-10-17'))
    setDate(time.split(' ')[0] + ' ' + time.split(' ')[1])
  }, [])

  return (
    <Container
      id="experiences"
      className="flex justify-center items-center flex-col"
    >
      <h1 className="text-4xl font-medium text-center text-slate-700">
        Experiences
      </h1>
      <InfoBox
        title="ultimate"
        image="ultimate.png"
        imageObject="contain"
        infoOne={
          <>
            At my first job, I worked at{' '}
            <span className="font-bold">Ultimate Lifestyle</span> for 6 months.
          </>
        }
        infoTwo={`This job was where I fully immersed myself in learning and tackled
        some of the most significant website projects.`}
        infoThree={`My journey at Ultimate Lifestyle was marked by doing my best,
        continuous learning, collaboration, and a commitment to delivering
        high-quality solutions.`}
      />
      <InfoBox
        title="agb"
        image="AGB.png"
        imageObject="contain"
        infoOne={
          <>
            At my second job, I worked at{' '}
            <span className="font-bold">AGB Communication</span> in {date}.
          </>
        }
        infoTwo={`I dedicated a year to honing my skills and contributing to impactful
        projects. As a full-stack developer, I took on diverse
        responsibilities, with a primary focus on backend development.`}
        infoThree={`My journey at AGB Communication was marked by continuous learning,
        collaboration, and a commitment to delivering high-quality
        solutions.`}
      />
    </Container>
  )
}

export default Experiences
