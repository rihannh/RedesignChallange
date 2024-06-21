import banner from "../assets/images/banner.png"
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import ButtonGDSC from "./ButtonGDSC";

export default function Hero() {
    return (
        <section id="hero" className="container 2xl:px-[7%] mx-auto text-center">
            {/* <div className="nav bg-gray-400 w-full h-20"></div> */}
            <div className="w-full h-28 md:h-48 lg:h-72 mt-28 rounded-lg overflow-hidden shadow-md">
                <img src={banner} alt="banner GDSC" className="w-full h-full object-cover" />
            </div>
            <h1 className=" text-3xl lg:text-5xl font-bold lg:font-extrabold mt-8">Universitas Sriwijaya - Palembang, Indonesia </h1>
            <p className="text-xl lg:text-3xl font-light mt-3 lg:mt-5">1057 Group Members</p>
            <div className="flex justify-center gap-2 mt-3 mb-6 lg:mt-5">
                <a href="#" className="w-8 h-8 bg-low-black p-2 rounded-full flex items-center justify-center hover:bg-blue hover:shadow-md hover:shadow-blue  hover:scale-110 duration-300">
                    <FaLinkedinIn className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-low-black p-2 rounded-full flex items-center justify-center hover:bg-red hover:shadow-md hover:shadow-red hover:scale-110 duration-300">
                    <MdEmail className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-low-black p-2 rounded-full flex items-center justify-center hover:bg-yelllow hover:shadow-md hover:shadow-yelllow hover:scale-110 duration-300">
                    <FaInstagram className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-low-black p-2 rounded-full flex items-center justify-center hover:bg-green hover:shadow-md hover:shadow-green hover:scale-110 duration-300">
                    <AiFillDiscord className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-low-black p-2 rounded-full flex items-center justify-center hover:bg-blue hover:shadow-md hover:shadow-blue hover:scale-110 duration-300">
                    <BiWorld className="text-white" />
                </a>
            </div>
            <ButtonGDSC />
        </section>
    )
}
