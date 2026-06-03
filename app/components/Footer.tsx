"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row max-[1260px]:flex-col max-[1260px]:gap-20 p-6 bg-[#181818] items-center justify-between md:px-60">
        <div>
          <Image src="/Kingstar.png" alt="logo" width={200} height={200} className="mb-10" />
          <p className="text-[#6C6C6C]">Box 35300</p>
          <p className="text-[#6C6C6C]">1810 Campus Way NE</p>
          <p className="text-[#6C6C6C]">Bothell, WA 98011-8246</p>
          <p className="mt-5">+1-2534-4456-345</p>
          <p>admin@kingsteruni.edu</p>
          <div className="px-4 py-0.25 w-50 bg-[#DC3C3A] mt-5" />
        </div>
        <div>
          <p className="font-bold text-xl">Our Campus</p>
          <div className="px-4 py-0.25 w-50 bg-[#DC3C3A] my-5" />
          <p className="mb-2 text-[#6C6C6C]">Acedemic</p>
          <p className="mb-2 text-[#6C6C6C]">Planning & Administration</p>
          <p className="mb-2 text-[#6C6C6C]">Campus Safety</p>
          <p className="mb-2 text-[#6C6C6C]">Office of the Chancellor</p>
          <p className="mb-2 text-[#6C6C6C]">Facility Services</p>
          <p className="mb-2 text-[#6C6C6C]">Human Resources</p>
        </div>
        <div>
          <p className="font-bold text-xl">Campus Life</p>
          <div className="px-4 py-0.25 w-50 bg-[#DC3C3A] my-5" />
          <p className="mb-2 text-[#6C6C6C]">Accessibility</p>
          <p className="mb-2 text-[#6C6C6C]">Financial Aid</p>
          <p className="mb-2 text-[#6C6C6C]">Food Services</p>
          <p className="mb-2 text-[#6C6C6C]">Housing</p>
          <p className="mb-2 text-[#6C6C6C]">Information Technologies</p>
          <p className="mb-2 text-[#6C6C6C]">Student Life</p>
        </div>
        <div>
          <p className="font-bold text-xl">Academics</p>
          <div className="px-4 py-0.25 w-50 bg-[#DC3C3A] my-5" />
          <p className="mb-2 text-[#6C6C6C]">Canvas</p>
          <p className="mb-2 text-[#6C6C6C]">Catalyst</p>
          <p className="mb-2 text-[#6C6C6C]">Library</p>
          <p className="mb-2 text-[#6C6C6C]">Time Schedule</p>
          <p className="mb-2 text-[#6C6C6C]">Apply For Admissions</p>
          <p className="mb-2 text-[#6C6C6C]">Pay My Tuition</p>
        </div>
      </div>

      <div className="flex flex-row max-[1280px]:flex-col gap-3 p-6 bg-[#202020] items-center justify-between md:px-60">
        <p className="text-sm text-[#8D8D7E]">Copyright All Right Reserved 2026, GoodLayers</p>
        <div className="flex gap-4 text-[#DC3C3A] hover:cursor-pointer">
          <FaFacebook />
          <FaLinkedin />
          <FaSkype />
          <FaX />
          <FaInstagram />
        </div>  
      </div>
    </div>
  );
};

export default Footer;
