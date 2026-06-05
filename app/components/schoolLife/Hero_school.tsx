import Image from "next/image";

const HeroSchool = () => {
  return (
    <div className="relative w-full overflow-hidden">
          <Image
            src="/schoolLife.jpg"
            alt="courses"
            width={800}
            height={400}
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 z-10 bg-black/30" />
          <div className="absolute inset-x-0 inset-y-30 items-start justify-start z-20 flex flex-col min-[1260px]:flex-row text-white p-24 min-[1260px]:px-60 min-[1260px]:py-30 gap-4 min-[1260px]:gap-20 min-[1260px]:inset-y-80">
            <div className="flex flex-col">
              <p className="font-bold text-5xl">School Life</p>
              <div className="w-72 h-1 bg-[#DC3C3A] mt-5" />
            </div>
            <p className="text-base md:text-xl max-w-2xl leading-relaxed">
              Campus on a tour designed for prospective graduate and professional
              students. You will see how our university like, facilities, students
              and life in this university. Meet our graduate admissions
              representative to learn more about our graduate programs and decide
              what is the best for you.
            </p>
          </div>
        </div>
  );
};

export default HeroSchool;
