"use client";
import { recent } from "@/app/constants/recent_posts";
import { ArrowRight, Search } from "lucide-react";

const BlogLeft = () => {
  return (
    <div className={`flex flex-col items-center bg-[#F7F7F7] w-full gap-3`}>
      <div className="relative">
        <input
          placeholder="Search"
          className="px-2 mt-5 w-70 h-10 text-black border border-[#64BEE6] text-sm"
        />
        <Search className="absolute right-2 top-1/2 text-[#6B6B74]" size={15} />
      </div>
      <div className="w-70 min-[1260px]:h-60 mt-10">
        <div className="bg-[#EDEDED]">
          <div className="px-5 py-4">
            <p className="text-[#383838] font-bold">About Us</p>
          </div>
          <div className="px-20 py-0.5 bg-[#64BEE6]" />
          <div>
            <p className="px-5 py-4 text-[#7D6B6B] bg-[#F7F7F7]">
              Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
              libero, a pharetra augue. Nulla vitae elit libero, a pharetra
              augue. Donec sed odio dui.
            </p>
          </div>
        </div>
        <div className="bg-[#EDEDED] mt-10">
          <div className="px-5 py-4">
            <p className="text-[#383838] font-bold">Recent Posts</p>
          </div>
          <div className="px-20 py-0.5 bg-[#64BEE6]" />
          {recent.map((item) => (
            <div key={item.id} className="p-2 bg-[#F7F7F7]">
              <div className="flex my-5 gap-2">
                <ArrowRight className="text-[#E1483A]" size={25} />
                <p className="text-[#E1483A] text-sm">{item.title}</p>
              </div>
              <div className="px-20 py-0.25 bg-[#64BEE6]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLeft;
