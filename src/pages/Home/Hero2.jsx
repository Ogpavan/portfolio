import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import blog from "../../assets/blog.png";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

function Hero2() {
  return (
    <section className=" flex flex-col lg:flex-row gap-5 justify-center max-w-[1170px]   mx-auto px-7 md:px-24">
      <Link to='/blogs'>
      <div className="bg-gradient-to-br from-[#222222] to-[#101010]  rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_120,_87,_0.3)] duration-300  w-full sm:w-auto  space-y-1 ">
        <div className="w-full flex justify-center mt-3 p-6 items-center ">
          <div className="flex justify-center items-center w-auto lg:min-w-32   ">
            <img src={blog} alt="" className="w-16 invert" />
          </div>
        </div>

        <div className="inter-tight-medium flex justify-between items-end  p-4">
          <div className="flex flex-col">
            <p className="text-[#9f9e9e] text-sm inter-tight-medium">Blogs</p>
            <p className="text-xl text-white/90 inter-tight-bold"> Soon</p>
          </div>
          <div className=" ">
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>
      </Link>

      <div className="bg-gradient-to-br from-[#222222] to-[#101010] rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_78,_216,_0.2)] duration-300 w-full   space-y-1  ">
        <div className="">
          <div className="bg-gradient-to-br from-[#222222] to-[#1d1d1d] flex justify-between  rounded-3xl py-4   gap-x-4  px-4 md:px-10">
            <a href="https://www.linkedin.com/in/pawanpal007/ " target="_blank">
            <div
              aria-label="LinkedIn Profile"
              className="bg-[#0F0F0F]/30 rounded-full w-20 h-20 flex justify-center items-center text-3xl hover:bg-white text-white hover:text-blue-700 cursor-pointer"
            >
              <FaLinkedinIn />
            </div>
            </a>
            <a href="https://github.com/Ogpavan" target="_blank">
            <div
              aria-label="GitHub Profile"
              className="bg-[#0F0F0F]/30 rounded-full w-20 h-20 flex justify-center items-center text-3xl hover:bg-white text-white hover:text-black cursor-pointe"
            >
              <SiGithub />

            </div>
            </a> 
            <a href="https://www.instagram.com/pawan_._pal/ " target="_blank">
            <div
              aria-label="Instagram Profile"
              className="bg-[#0F0F0F]/30 rounded-full w-20 h-20 flex justify-center items-center text-3xl hover:bg-white text-white hover:text-[#c84469] cursor-pointe"
            >
              <BsInstagram />
            </div>
            </a>

              <a href="https://x.com/Pawanpal404" target="_blank">
                          <div
              aria-label="Call"
              className="bg-[#0F0F0F]/30 rounded-full w-20 h-20 sm:flex justify-center items-center text-3xl hover:bg-white text-white hover:text-blue-600 cursor-pointer hidden xs:block"
            >
             <FaXTwitter />
            </div>
            </a>

          </div>
        </div>

        <div className="inter-tight-medium flex justify-between items-end p-4 ">
          <div className="flex flex-col">
            <p className="text-[#9f9e9e] text-sm inter-tight-medium">
              Stay with me
            </p>
            <p className="text-xl text-white/90 inter-tight-bold">
              Social Handles
            </p>
          </div>
          <div>
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#222222] to-[#101010]  rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_120,_87,_0.3)] duration-300  w-full sm:w-auto  space-y-1 ">
        <div className="w-full flex justify-center mt-3 p-6 items-center ">
          <div className="flex justify-center items-center w-auto lg:min-w-32   ">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEHElEQVR4nO2bW6gVVRjHf56jRaVmHiTUOPlgkpejokSYR1Swl8IHRUWJUh+CihLtwQRB0RB60eiCt0B8KFLERLcXJKGLGEQ9aVkGQXlBU9Eo66hpOz75DyymPXPmuvdsz/xhPRxm1jfrd9Y33/rWN2vD/3Uv8CZwFqgWuHUBnwNTSKEW4NMCwMRp/wCdSYEXysgZYJL+AUXVQ8D7Gu8PSY18JAMv0xxqBS5rzO1JDFTUeSbNo+Mac0eSzpWeBrwvAvADend+yzkYXQG2AwMbDfxBnaPw/kYCtwJ/aSkYTb6yIPQ78C/Q1qh3uE3XLTLWQ1FgSuAsXbqtzjP8jZ73WE8BfgJ4oZt77iqXjqK6RekxFEO5r8Nb67D2WlIztCjA9wPvAhdyBDbbQ+oBXOlpuXSlBC6+yhlOG7RGAlfrvEMKarYkTs47Sj+uvWm1AO0a8FSWwJUyaBVf5QzHUaV06eIrd5ceAiwH3lBbBvT13fOkcz1tW9Ro4HU1lgv/Jv1YxstReyOBBwOrgbfUVqhW7a9UrHPuSdMWdzPmMkrHUaWM0sWRfbqdoYC5yPkE47n0mLthhnsrd14L/OoLZNeBj4Fz+ntUMwH3BVYBn+gEwhHgex1rcCF/At4GDgG3fNdsk+N5wnpgMzCuiMA2wKMhS5KBvwdMBXo5/R7RCvGFznpYrc00ALipvl3duXojgMfrmeeBWXpPZ2hd7ZfQpkHull3ziFTAz6suHbYp3xwhmbB38kHg2YifReNqjuzuSgv8nOMyQZvyTRGAf2kW4KyVF/DcEriGyhkuuEvbMclXgeFJXXpfE73DBntAfbclBd7bAOBn9EwbfC1ZsjFBn2prwV4MSCttTa9qPY4NbNnQS04V4nVgOtloip75ZcgyWFXKOUCwBx3YoExqvu75MOzhO3WTufY9vg19rbV0t+8/H6fE45VuRsvWyYAxjVAW5qWZhyPAmpbqvnfCgMcCl3TjXge6RcHBq0JscE7iLalh51iM0s19wA1lb/7Kiad2ZxsYBRa919UoB2XHBUAHvSPmXiQo8bilm69l6+mQcfWXR52KuPf9WTYtV+9W7kwf1Hvj10Rd/5b0WiVbdrYyC3U6575bo3YKcu88gB8FbmsjEvVsR5h2aWxr4nYMg84SGEXTLGa5U+cz/wAeTmJgrIKEHzprYAtMf8vmvIQ2Bjrv7so0g6kFnTWw6UXZ/DPBDzcswn+m/rZK9Ek7GD/0pByATVucwoKtBFFkn3++Ur/TGcWBO+pwoL/LCbjFVzHZFnJmq1UJjPdDD3PnYRmPBxc6D2Avf35Fs+wV4zYqDe2vCuVrqmJWHa8bRE7q8EFn1bp8ObqllTu0ZAX1+RFYkBcoPmirS2UJbDM6rcazbEat1nxCkdwKgHuA2XESC9N/6gkoiWekip4AAAAASUVORK5CYII="
              className="invert "
            />
          </div>
        </div>

        <div className="inter-tight-medium flex justify-between items-end  p-4">
          <div className="flex flex-col">
            <p className="text-[#9f9e9e] text-sm inter-tight-medium">
              Download
            </p>
            <p className="text-xl text-white/90 inter-tight-bold">Resume</p>
          </div>
          <div className=" ">
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
