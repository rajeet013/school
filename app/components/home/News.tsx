import { data, date } from "@/app/constants";
import { ArrowRightIcon, MapPinnedIcon } from "lucide-react";
import Image from "next/image";

const News = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-[url('/news_background.jpg')] bg-cover bg-center bg-no-repeat min-[1260px]:p-20 p-5">
        <div className="flex items-end gap-4">
          <Image src="/blog-title.png" alt="news" width={50} height={50} />
          <h2 className="text-xl font-bold">News & Update</h2>
        </div>
        <div className="flex flex-col min-[1260px]:flex-row items-center gap-10 mt-5">
          <div className="flex flex-col">
            <p className="text-[#313131] mt-3">Read All News</p>
            <Image src="/new.jpg" alt="news" width={400} height={400} />
            <p className="text-[#BFEBFE] mt-5 font-bold">
              June 6, 2016 / Admission, Student
            </p>
            <p className="font-bold">
              Professor Albert joint research on mobile money in Tanzania
            </p>
          </div>
          <div>
            {data.map((item, index) => (
              <div key={index} className="flex items-start gap-4 mt-5">
                <Image
                  src={item.image}
                  alt={`news_${index}`}
                  width={100}
                  height={100}
                />
                <div>
                  <p className="text-[#BFEBFE] font-bold">{item.title}</p>
                  <p className="font-bold text-[#FFFFFF]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] min-[1260px]:p-30 p-5">
        <h2 className="text-xl font-bold text-[#DC3C3A]">Upcoming Events</h2>

        {date.map((item, index) => (
          <div key={index} className="flex items-start gap-4 mt-5">
            <div className=" text-[#64BEE6] p-4 text-center">
              <p className="text-lg font-bold">{item.number}</p>
              <p className="text-sm">{item.month}</p>
            </div>
            <div>
              <h3 className="font-bold text-black">{item.title}</h3>
              <div className="flex items-center gap-2">
                <p className="text-black">{item.time}</p>
                <MapPinnedIcon className="text-black mt-2" />
                <p className="text-black">Kingster Hall</p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-end gap-2 mt-5">
          <p className="font-bold text-[#DD5352] hover:cursor-pointer">
            View All Events
          </p>
          <ArrowRightIcon className="text-[#DD5352] mt-2" />
        </div>
      </div>
    </div>
  );
};

export default News;
