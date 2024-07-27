import React from "react";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import sign from "../../assets/sign.png";
import works from "../../assets/works.webp";

function Hero1() {
  return (
    <>
      <section className="  bg-[#0F0F0F]  ">
        <div className="max-w-[1170px] mx-auto">
          <div className="bg-[#0F0F0F] text-white/90 flex flex-wrap gap-y-4 gap-x-4  justify-center p-6 items-center">
            <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}}
           
            
            className="bg-gradient-to-br from-[#222222] to-[#101010]  rounded-3xl hover:shadow-[0_10px_30px_rgba(240,_46,_170,_0.3)] duration-300 px-16 py-6 space-y-1 h-80 max-w-3xl min-w-1/2 md:w-auto flex justify-center items-center  ">
              <div>
                <p className="inter-tight-medium text-xl text-[#BCBCBC]">
                  A WEB DEVELOPER
                </p>
                <h1 className="inter-tight-bold text-6xl flex flex-col py-2 ">
                  <span>Pawan</span>
                  <span>Pal.</span>
                </h1>
                <p className="inter-tight-medium text-xl text-[#BCBCBC] flex flex-col">
                  <span>I am a Web Developer based in</span>
                  <span>Bareilly</span>{" "}
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-y-4  w-full md:w-1/2 ">
              <div>
                
                <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}} className="bg-gradient-to-br from-[#222222] to-[#101010]  rounded-3xl hover:shadow-[0_10px_30px_rgba(240,_46,_10,_0.2)] duration-300  space-y-1 cursor-pointer ">
                  <div>
                    <div className="text-[#9f9e9e] text-sm inter-tight-medium px-10 py-3 flex  ">
                      <div className="relative    overflow-hidden  ">
                        <div className="flex animate-marquee whitespace-nowrap ">
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold  px-2">
                              Featured
                            </span>
                          </li>
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>

                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>
                          <li className="flex px-4">
                            Latest Work and{" "}
                            <span className="text-slate-100 font-bold px-2">
                              Featured
                            </span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className=" flex flex-col sm:flex-row justify-center gap-y-4 gap-x-4 ">
              <Link to='/about'>

              <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}} className="bg-gradient-to-br from-[#222222] to-[#101010]  rounded-3xl hover:shadow-[0_10px_30px_rgba(240,_46,_10,_0.2)] duration-300  w-full sm:w-auto  space-y-1 ">
                  <div className="w-full flex justify-center p-6">
                    <img
                      src={sign}
                      alt="signature"
                      loading="lazy"
                    />
                  </div>

                  <div className="inter-tight-medium flex justify-between items-end p-4">
                    <div className="flex flex-col">
                      <p className="text-[#9f9e9e] text-sm inter-tight-medium">
                        More About me
                      </p>
                      <p className="text-xl text-white/90 inter-tight-bold">
                        Credentials
                      </p>
                    </div>
                    <div className=" ">
                      <img
                        src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </motion.div>
                </Link>





                <Link to='/work'>
                <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0,ease:"easeInOut"}} className="bg-gradient-to-br from-[#222222] to-[#101010]  rounded-3xl hover:shadow-[0_10px_30px_rgba(240,_46,_300,_0.2)] duration-300 w-full sm:w-auto space-y-1 ">
                  <div className="w-full flex justify-center p-6">
                    <img
                      src={works}
                      alt="work"
                      className=""
                    />
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
                      <img
                        src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </motion.div>
                </Link>
              </div>
            </div>
          </div>







        </div>
        <div className="">
        <Hero2 />
        <Hero3 />
        </div>
      </section>
    </>
  );
}

export default Hero1;
