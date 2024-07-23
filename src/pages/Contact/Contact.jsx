import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCallOutline } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_d6e1bw2', 'template_oyo2qzw', e.target, 'xZZFcodZElN2Z0La4')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
      });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="flex flex-col lg:flex-row gap-5 justify-center max-w-[1170px] mx-auto px-7 md:px-24">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="text-white flex flex-col gap-y-7 pr-20">
          <p className="inter-tight-bold">CONTACT INFO</p>
          <div className="flex gap-4">
            <div className="bg-gradient-to-br from-[#222222] to-[#101010] flex justify-center items-center p-4 w-16 text-3xl rounded-lg text-white">
              <MdMailOutline />
            </div>
            <div>
              <p className="inter-tight-bold text-sm text-[#9f9e9e]">Mail Us</p>
              <p className="text-sm inter-tight-bold">connect.pawan69@gmail.com</p>
              <p className="text-sm inter-tight-bold">pawantwp@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-gradient-to-br from-[#222222] to-[#101010] flex justify-center items-center p-4 w-16 text-3xl rounded-lg text-white">
              <IoCallOutline />
            </div>
            <div>
              <p className="inter-tight-bold text-sm text-[#9f9e9e]">Contact Us</p>
              <p className="text-sm inter-tight-bold">+91 7302667115</p>
              <p className="text-sm inter-tight-bold">+91 7302667115</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-gradient-to-br from-[#222222] to-[#101010] flex justify-center items-center p-4 w-16 text-3xl rounded-lg text-white">
              <FaLocationDot />
            </div>
            <div>
              <p className="inter-tight-bold text-sm text-[#9f9e9e]">Location</p>
              <p className="text-sm inter-tight-bold">Bareilly, UP</p>
              <p className="text-sm inter-tight-bold">India</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#222222] to-[#101010] rounded-3xl hover:shadow-[0_10px_30px_rgba(0,_78,_216,_0.2)] duration-300 space-y-1 p-4 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
            <div className="flex text-4xl inter-tight-bold text-white/90">
              <p className="mr-2">Let's</p>
              <p>Work<span className="text-blue-400"> Together </span></p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gradient-to-br from-[#353434] to-[#232323] text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gradient-to-br from-[#353434] to-[#232323] text-white"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject*"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gradient-to-br from-[#353434] to-[#232323] text-white"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message*"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gradient-to-br from-[#353434] to-[#232323] h-28 text-white"
                required
              />
              <button type="submit" className="w-full px-3 py-2 rounded-md bg-[#353434] text-white hover:bg-white hover:text-black">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
