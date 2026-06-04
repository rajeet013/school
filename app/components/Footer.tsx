"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { footer } from "../constants";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row max-[1260px]:flex-col max-[1260px]:gap-20 p-6 bg-[#181818] items-center justify-between md:px-60">
        <div>
          <Image
            src="/ZettaKids.png"
            alt="logo"
            width={200}
            height={200}
            className="mb-10"
          />
          <p className="text-[#6C6C6C]">Box 35300</p>
          <p className="text-[#6C6C6C]">1810 Campus Way NE</p>
          <p className="text-[#6C6C6C]">Bothell, WA 98011-8246</p>
          <p className="mt-5">+1-2534-4456-345</p>
          <p className="hover:cursor-pointer">admin@kingsteruni.edu</p>
          <div className="px-4 py-px w-50 bg-[#DC3C3A] mt-5" />
        </div>
        {footer.map((item) => (
          <div key={item.id}>
            <p className="font-bold text-xl">{item.heading}</p>
            <div className="px-4 py-px w-50 bg-[#DC3C3A] my-5" />
            <p className="mb-2 text-[#6C6C6C] hover:cursor-pointer hover:text-white">
              {item.title}
            </p>
            <p className="mb-2 text-[#6C6C6C] hover:cursor-pointer hover:text-white">
              {item.plan}
            </p>
            <p className="mb-2 text-[#6C6C6C] hover:cursor-pointer hover:text-white">
              {item.facility}
            </p>
            <p className="mb-2 text-[#6C6C6C] hover:cursor-pointer hover:text-white">
              {item.official}
            </p>
            <p className="mb-2 text-[#6C6C6C] hover:cursor-pointer hover:text-white">
              {item.services}
            </p>
            <p className="mb-2 text-[#6C6C6C] hover:cursor-pointer hover:text-white">
              {item.management}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-row max-[1280px]:flex-col gap-3 p-6 bg-[#202020] items-center justify-between md:px-60">
        <p className="text-sm text-[#8D8D7E]">
          Copyright All Right Reserved 2026, GoodLayers
        </p>
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
