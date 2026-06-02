import { MailOpenIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaPinterest, FaVimeo } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="flex bg-[#64BEE6] w-full py-4 items-center justify-between">
        <div className="flex gap-2">
          <MailOpenIcon />
          <p>contact@KingsterKids.edu</p>
          <PhoneCallIcon />
          <p>+1-3435-2356-222</p>
        </div>
        <div className="flex h-full">
          <FaFacebook />
          <FaLinkedin />
          <FaPinterest />
          <FaX />
          <FaVimeo />
          <div className="bg-[#DC3C3A]">
            <p>Support KU</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full py-6">
        <Image src="/Kingstar.png" alt="logo" width={20} height={20} />
      </div>
    </div>
  );
};

export default Navbar;
