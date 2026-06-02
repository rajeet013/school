import { MailOpenIcon, PhoneCallIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaPinterest, FaVimeo } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <div className="max-[768px]:hidden flex md:px-60 bg-[#64BEE6] w-full py-1 items-center justify-between">
        <div className="flex gap-2">
          <MailOpenIcon />
          <p>contact@KingsterKids.edu</p>
          <PhoneCallIcon />
          <p>+1-3435-2356-222</p>
        </div>
        <div className="flex items-center gap-4">
          <FaFacebook className="hover:text-[#DC3C3A] hover:cursor-pointer" />
          <FaLinkedin className="hover:text-[#DC3C3A] hover:cursor-pointer" />
          <FaPinterest className="hover:text-[#DC3C3A] hover:cursor-pointer" />
          <FaX className="hover:text-[#DC3C3A] hover:cursor-pointer" />
          <FaVimeo className="hover:text-[#DC3C3A] hover:cursor-pointer" />
          <button type="button" className="bg-[#DC3C3A] hover:cursor-pointer py-4 px-6">  
            Support KU
          </button>
        </div>
      </div>
      <div className="flex md:px-60 items-center justify-between bg-white w-full py-6">
        <Image src="/Kingstar.png" alt="logo" width={200} height={100} />
        <div className="text-black flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/pages">Pages</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/school life">School Life</Link>
          <Link href="/contact">Contact</Link>
          <SearchIcon className="text-[#64BEE6]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
