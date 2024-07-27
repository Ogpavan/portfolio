import React from "react";
import mobile from '../../assets/mobile-app-dev-icon.png'
import web from '../../assets/web.png'
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

function About() {
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
          <h1 className=" text-3xl md:text-6xl text-white inter-tight-bold">Self Summary</h1>
          <img
            src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
            alt=""
            className="w-10 h-10"
          />
        </div>

        <div className="  flex flex-col gap-5">
        <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}} className="bg-gradient-to-br flex items-end justify-between from-[#222222] to-[#101010] rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_78,_216,_0.2)] duration-300 w-full space-y-1  flex-col ">
            <div className="w-full  px-6 ">
              <img
                src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2.png"
                alt=""
                className=""
              />
            </div>
            <div className=" text-white/90 p-6 space-y-3">
              <p className=" text-4xl inter-tight-bold">Pawan Pal</p>
              <p className="inter-tight-medium">
                I am web developer based in Bareilly, Uttar Pradesh specializing
                in React.js, Vite, Tailwind CSS, Bootstrap, and JavaScript. He
                is currently pursuing a Bachelor's in Computer Application and
                seeks hands-on industry experience.I have completed several
                projects, continually improving my coding skills and efficiency.
              </p>
            </div>
          </motion.div>

            <div className="flex justify-center gap-5 flex-col sm:flex-row">
            <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}} className="bg-gradient-to-br flex items-end justify-between from-[#222222] to-[#101010] rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_78,_216,_0.2)] duration-300 w-full space-y-1  flex-col ">
                <div className=" text-white/90 p-6 space-y-3  w-full">
                  <p className=" text-xl inter-tight-bold">Experiance</p>
                 <div>
                  <p className="text-[#9f9e9e]">2021 - 2023</p>
                  <p className="inter-tight-bold text-lg">Designer and Developer</p>
                  <p  className="text-[#9f9e9e]">Freelancer</p>
                 </div>
                 <div>
                  <p  className="text-[#9f9e9e]">2023 - Present</p>
                  <p  className="inter-tight-bold text-lg">Front-end Developer</p>
                  <p  className="text-[#9f9e9e]">Larson & Morgan</p>
                 </div>
                </div>
              </motion.div>

              <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}} className="bg-gradient-to-br flex items-end justify-between from-[#222222] to-[#101010] rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_78,_216,_0.2)] duration-300 w-full space-y-1  flex-col ">
                <div className=" text-white/90 p-6 space-y-3  w-full">
                  <p className=" text-xl inter-tight-bold">Education</p>
                 <div>
                  <p className="text-[#9f9e9e]">2022 - 2025</p>
                  <p className="inter-tight-bold text-lg">Bachelors in Computer Application</p>
                  <p  className="text-[#9f9e9e]">Khandelwal College</p>
                 </div>
                 <div>
                  <p  className="text-[#9f9e9e]">2019 - 2021 </p>
                  <p  className="inter-tight-bold text-lg">Highschool & Intermediate</p>
                  <p  className="text-[#9f9e9e]">Padmawati Academy</p>
                 </div>
                </div>
              </motion.div>
              </div>





              
              <div className="flex gap-5 flex-col sm:flex-row">
                
              <div className='flex flex-col lg:flex-row gap-5 w-full'>

              <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}}className="bg-gradient-to-br from-[#222222] to-[#101010]  rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_253,_560,_0.2)] duration-300   space-y-1   flex flex-col justify-center items-center  md:w-1/2 ">
<div className="w-full flex justify-center p-3  items-center gap-x-5 ">
<img src={mobile} alt="mobile" className='invert w-10 h-18' />
<img src={web} alt='' className='invert  w-24 '/>


</div>

<div className="inter-tight-medium flex justify-between items-end p-4  w-full">
  <div className="flex flex-col jus">
  <p className="text-[#9f9e9e] text-sm inter-tight-medium">
   Development
  </p>
  <p className="text-xl text-white/90 inter-tight-bold">
    Web & App
  </p>
  </div>
  <div className=" ">
 <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg" alt="icon" />
</div>
</div>

</motion.div>



<motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}}className="bg-gradient-to-br flex items-end justify-between from-[#222222] to-[#101010] rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_78,_216,_0.2)] duration-300 w-full space-y-1 p-6 ">
<Link to="/contact" className="w-full ">
<div className=" text-4xl inter-tight-bold text-white/90">
<p>Let's</p>
<p>Work<span className='text-blue-400'> Together </span></p>

</div>
</Link>



<div>
<img
  src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
  alt="icon"
/>
</div>
</motion.div>

</div>
        
<motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}} className="bg-gradient-to-br from-[#222222] to-[#101010]  rounded-3xl hover:shadow-[0_10px_30px_rgba(240,_46,_300,_0.2)] duration-300 w-full sm:w-auto space-y-1 ">
          <Link to='/work' className="w-full">
            <div className="w-full flex justify-center p-6">
              <img src='https://wpriverthemes.com/landing/gridx-html/assets/images/my-works.png' alt="signature" className="" />
            </div>

           <div className="inter-tight-medium flex justify-between items-end p-4">
              <div className="flex flex-col">
              <p className="text-[#9f9e9e] text-sm inter-tight-medium">
                Showcase
              </p>
              <p className="text-xl text-white/90 inter-tight-bold">
                Projects
              </p>
              </div>
              <div className=" ">
              <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg" alt="icon" />
            </div>
            </div>
            </Link>
              </motion.div>
           
              </div>
              

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
