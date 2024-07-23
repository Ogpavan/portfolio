import React from 'react'
import mobile from '../../assets/mobile-app-dev-icon.png'
import web from '../../assets/web.png'
import { Link } from 'react-router-dom'

function Hero3() {
  return (
    <section className=" flex flex-col lg:flex-row gap-5 justify-evenly  max-w-[1170px] py-5  mx-auto px-7 md:px-24">
            <div className='flex flex-col md:flex-row gap-5 w-full'>

            <div className="bg-gradient-to-br from-[#222222] to-[#101010]  rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_253,_560,_0.2)] duration-300   space-y-1   flex flex-col justify-center items-center  md:w-1/2 ">
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
           
          </div>

        
         
          <div className="bg-gradient-to-br flex items-end justify-between from-[#222222] to-[#101010] rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_78,_216,_0.2)] duration-300 w-full space-y-1 p-6 ">
          
        <div className=" text-4xl inter-tight-bold text-white/90">
           <p>Let's</p>
           <p>Work<span className='text-blue-400'> Together </span></p>
        </div>
        
          
          <div className=''>
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
              alt="icon"
            />
          </div>
        
        </div>
        
       
      
        
      </div>
      
           
    </section>
  )
}

export default Hero3