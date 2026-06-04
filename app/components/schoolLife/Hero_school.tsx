const HeroSchool = () => {
  return (
    <div className="flex flex-col md:flex-row relative w-full overflow-hidden bg-[url(/schoolLife.jpg)] bg-cover bg-center h-150">
      <div className="absolute inset-0 z-10 bg-black/30" />
      <div className="absolute inset-0 items-around justify-end z-20 flex flex-col text-white p-24 md:px-60 md:py-30 gap-5">
        <p className="font-bold text-5xl">School Life</p>
        <div className="px-4 py-0.5 w-70 bg-[#DC3C3A]" />
        <div className="absolute inset-x-100 inset-y-100 items-around justify-end z-10 flex flex-col text-white p-24 md:px-60 md:py-30">
          <p className="text-xl">
            Campus on a tour designed for prospective graduate and professional
            students. You will see how our university like, facilities, studenst
            and life in this university. Meet our graduate admissions
            representative to learn more about our graduate programs and decide
            what it the best for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSchool;
