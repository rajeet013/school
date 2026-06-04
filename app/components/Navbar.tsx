"use client";
import {
  MailOpenIcon,
  MenuIcon,
  PhoneCallIcon,
  SearchIcon,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaPinterest, FaVimeo } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50">
      <div className="max-[1260px]:hidden flex md:px-60 bg-[#64BEE6] w-full py-1 items-center justify-between">
        <div className="flex gap-3">
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
          <button
            type="button"
            className="bg-[#DC3C3A] hover:cursor-pointer py-4 px-6"
          >
            Support KU
          </button>
        </div>
      </div>
      <div className="flex min-[1260px]:px-60 items-center justify-between bg-white w-full max-[1260px]:py-2 py-6">
        <Image
          src="/ZettaKids.png"
          alt="logo"
          width={200}
          height={100}
          className="max-[1260px]:pr-5"
        />
        <div className="text-black flex items-center gap-6 max-[1260px]:hidden">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition p-4 ${
                  isActive
                    ? "text-[#64BEE6] border-b-6 border-[#DC3C3A]"
                    : "text-black hover:text-[#64BEE6] hover:border-b-6 hover:border-[#DC3C3A]"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
          <SearchIcon
            className="text-[#64BEE6]"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          {isSearchOpen && (
            <div className="flex items-center gap-2 w-full bg-white px-6 py-3 text-black">
              <X onClick={() => setIsSearchOpen(!isSearchOpen)} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full border px-4 py-2 outline-none"
              />
            </div>
          )}
        </div>
        <div className="flex gap-5 min-[1260px]:hidden">
          <SearchIcon
            className="text-[#64BEE6]"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          {isSearchOpen && (
            <div className="flex items-center gap-2 w-full bg-white px-6 py-3 text-black">
              <X onClick={() => setIsSearchOpen(!isSearchOpen)} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full border px-4 py-2 outline-none"
              />
            </div>
          )}
          <MenuIcon
            className="text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <div className="flex fixed inset-0 z-50 justify-end">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="relative bg-black w-[260px] h-full p-6 flex flex-col gap-6 text-white shadow-lg">
                <X
                  className="cursor-pointer text-xl"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                {navLinks.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
