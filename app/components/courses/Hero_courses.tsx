import Image from "next/image";

const HeroCourses = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/philosophy.jpg"
        alt="courses"
        width={800}
        height={100}
        className="w-full h-80 object-cover"
      />
      <div className="absolute inset-0 z-10 bg-black/30" />
      <div className="absolute inset-0 items-around justify-end z-20 flex flex-col text-white p-24 md:px-60 md:py-30">
        <p className="font-bold text-5xl">Courses</p>
      </div>
    </div>
  );
};

export default HeroCourses;
