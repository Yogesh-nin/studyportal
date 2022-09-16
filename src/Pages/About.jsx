import React from 'react'
import CoverAbout from '../Components/AboutPage/cover'
import Cover2 from '../Components/AboutPage/cover2'
import Founder from '../Components/AboutPage/Founder'
import Partner from '../Components/AboutPage/Partners'

const About = () => {
  return (
    <div>
        <CoverAbout />
        <Founder />
        <Cover2 />
        <Partner />
    </div>
  )
}

export default About