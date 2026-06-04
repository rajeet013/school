import { classLinksCourses } from "@/app/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ClassesCourses = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/course.png" alt="course" width={80} height={80} />
        <p className="text-black font-bold text-3xl">Our Classes</p>
      </div>
      <div className="grid min-[768px]:grid-rows-2 min-[768px]:grid-flow-col p-10 gap-10 justify-center">
        {classLinksCourses.map((item) => (
          <div key={item.id} className="flex flex-col text-black shadow-md">
            <Image src={item.image} alt="image" width={400} height={400} />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-[#DC3C3A] mb-5">
                {item.title}
              </h3>
              <p className="mb-3">
                <span className="font-bold">Teacher :</span>
                {item.teacher}
              </p>
              <p>
                <span className="font-bold">Grade: </span>
                {item.grade}
              </p>
              <div className="flex text-[#64BEE6] mt-5 hover:text-black hover:cursor-pointer">
                <p>Read More</p>
                <ArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesCourses;
