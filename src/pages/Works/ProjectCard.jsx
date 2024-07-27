import React, { useState } from 'react'
import { LuArrowUpRightFromCircle } from 'react-icons/lu'
import Skeleton from './Skeleton'
import {motion} from "framer-motion"

const ProjectCard = ({ img, alt, link, title, description }) => {
  const [loading, setLoading] = useState(true)

  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
        <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}} className='bg-gradient-to-br from-[#222222] to-[#101010] rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_253,_560,_0.2)] duration-300 flex flex-col gap-y-3'>
        {loading && <Skeleton />}
        <img
          src={img}
          alt={alt}
          className={`rounded-2xl ${loading ? 'hidden' : 'block'}`}
          onLoad={() => setLoading(false)}
        />
        <div className='px-4 py-2'>
          <p className='text-[#676767]'>{description}</p>
          <p className='text-white/90 text-xl inter-tight-bold flex items-center'>
            {title}
            <span className='ml-2'>
              <LuArrowUpRightFromCircle />
            </span>
          </p>
        </div>
      </motion.div>
    </a>
  )
}

export default ProjectCard
