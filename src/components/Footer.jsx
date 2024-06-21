import Logo from "../assets/images/logo-with-text-center.png";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Bevy from "../assets/images/bevy.png"

export default function Footer() {
  return (
    <section id='footer' className='container lg:px[7%] mt-24 lg:mt-32 border-t pt-2'>
      <div className="mx-auto">
        <img src={Logo} alt="Logo GDSC" className="h-44 mx-auto" />
        <div className="flex justify-center gap-2 mt-3 mb-6 lg:mt-5">
          <a href="#" className="w-8 h-8 p-2 rounded-full flex items-center justify-center bg-blue hover:shadow-md hover:shadow-blue  hover:scale-110 duration-300">
            <FaLinkedinIn className="text-white" />
          </a>
          <a href="#" className="w-8 h-8 p-2 rounded-full flex items-center justify-center bg-red hover:shadow-md hover:shadow-red hover:scale-110 duration-300">
            <MdEmail className="text-white" />
          </a>
          <a href="#" className="w-8 h-8 p-2 rounded-full flex items-center justify-center bg-yelllow hover:shadow-md hover:shadow-yelllow hover:scale-110 duration-300">
            <FaInstagram className="text-white" />
          </a>
          <a href="#" className="w-8 h-8 p-2 rounded-full flex items-center justify-center bg-green hover:shadow-md hover:shadow-green hover:scale-110 duration-300">
            <AiFillDiscord className="text-white" />
          </a>
          <a href="#" className="w-8 h-8 p-2 rounded-full flex items-center justify-center bg-blue hover:shadow-md hover:shadow-blue hover:scale-110 duration-300">
            <BiWorld className="text-white" />
          </a>
        </div>
        <img src={Bevy} alt="Bevy" className="mx-auto h-6" />
        <p className="text-center text-low-black my-7">Ⓒ 2024 All rights reserved GDSC Universitas Sriwijaya.</p>
      </div>
    </section>
  )
}
