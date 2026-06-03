import { teachers } from "@/app/constants/teachers";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaSkype, FaTwitter } from "react-icons/fa";

const Teachers = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#8FCFEB] p-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/teacher.png" alt="teacher" width={80} height={80} />
        <p className="text-black font-bold text-3xl">Our Teachers</p>
      </div>
      <div className="flex flex-col min-[768px]:flex-row p-10 gap-10 justify-center">
        {teachers.map((item) => (
          <div
            key={item.id}
            className="flex flex-col text-black shadow-md bg-white"
          >
            <Image
              src={item.image}
              alt={item.teacher}
              width={400}
              height={400}
              className="object-cover transition-transform duration-100 hover:scale-101 overflow-hidden"
            />
            <div className="p-8">
              <div className="flex text-[#FF8C24] mb-2 gap-2 hover:cursor-pointer">
                <FaFacebook size={25} />
                <FaLinkedin size={25} />
                <FaSkype size={25} />
                <FaTwitter size={25} />
              </div>
              <h3 className="text-2xl font-bold text-[#DC3C3A] mb-2">
                {item.teacher}
              </h3>
              <p className="text-[#808080]">{item.occupation}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="flex bg-[#DC3C3A] px-4 py-3 font-bold hover:cursor-pointer">
        View All Courses <ArrowRight />
      </button>
    </div>
  );
};

export default Teachers;
