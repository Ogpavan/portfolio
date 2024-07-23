import React from 'react'
import dental from '../../assets/dental.webp'
import realestate from '../../assets/realestate.webp'
import photography from '../../assets/photograpgy.webp'
import gym from '../../assets/gym.webp'
import ProjectCard from './ProjectCard'

const projects = [
  {
    img: realestate,
    alt: 'Real Estate',
    link: 'https://fakeestate.netlify.app/',
    title: 'Fake Estate',
    description: 'Real Estate website',
  },
  {
    img: gym,
    alt: 'Gym',
    link: 'https://solidgym.netlify.app/',
    title: 'Solid Gym',
    description: 'Gym website',
  },
  {
    img: dental,
    alt: 'Dental',
    link: 'https://24dental.netlify.app/',
    title: '24Dental',
    description: 'Dental website',
  },
  {
    img: photography,
    alt: 'Photography',
    link: 'https://ogpavan.github.io/photography_website/',
    title: 'Photography',
    description: 'Photography website',
  },
]

function Work() {
  return (
    <section className="bg-[#0F0F0F] max-w-[1170px] mx-auto">
      <div className="px-4 md:px-28 ">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center">
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
              alt="star"
              className="w-10 h-10"
            />
            <h1 className="text-3xl md:text-6xl text-white inter-tight-bold">All Projects</h1>
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
              alt="star"
              className="w-10 h-10"
            />
          </div>

          <div className='flex flex-col justify-center md:grid md:grid-cols-2 gap-5 md:gap-10'>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
