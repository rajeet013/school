"use client";
import { cloud, recentNews, works } from "@/app/constants";
import Image from "next/image";

const BlogRight = () => {
  return (
    <div className="flex flex-col items-center bg-[#F7F7F7] w-full gap-3">
      <div className="w-70 min-[1260px]:h-60 mt-10">
        <div className="bg-[#EDEDED]">
          <div className="px-5 py-4">
            <p className="text-[#383838] font-bold">Text Widget</p>
          </div>
          <div className="px-20 py-0.5 bg-[#64BEE6]" />
          <div>
            <p className="px-5 py-4 text-[#7D6B6B] bg-[#F7F7F7]">
              Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id
              dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper
              nulla non metus auctor fringilla. Maecenas sed diam eget.
            </p>
          </div>
        </div>
        <div className="bg-[#EDEDED] mt-10">
          <div className="px-5 py-4">
            <p className="text-[#383838] font-bold">Our Works</p>
          </div>
          <div className="px-20 py-0.5 bg-[#64BEE6]" />
          <div className="grid grid-cols-2 gap-3 mr-15 mt-5">
            {works.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.image}
                  alt="work"
                  width={100}
                  height={100}
                  className="hover:cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#EDEDED] mt-10">
          <div className="px-5 py-4">
            <p className="text-[#383838] font-bold">Tag Cloud</p>
          </div>
          <div className="px-20 py-0.5 bg-[#64BEE6]" />
          <div className="grid grid-cols-3 gap-2 p-3">
            {cloud.map((item) => (
              <div key={item.id}>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#E1483A] cursor-pointer"
                >
                  <p className="text-[9px] uppercase leading-relaxed">
                    {item.title}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#EDEDED] mt-10">
          <div className="px-5 py-4">
            <p className="text-[#383838] font-bold">Recent News</p>
          </div>
          <div className="px-20 py-0.5 bg-[#64BEE6]" />
          {recentNews.map((item) => (
            <div key={item.id} className="p-2 bg-[#F7F7F7]">
              <div className="my-5 gap-2">
                <p className="text-[#E1483A] text-lg cursor-pointer font-bold">
                  {item.title}
                </p>
                <p className="text-[#BFA8A0]">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogRight;
