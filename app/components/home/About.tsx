import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white px-16 py-20">
      <div className="flex max-[768px]:flex-col gap-5 md:gap-20 items-start max-w-6xl mx-auto">
        {/* Left: Icon + Title */}
        <div className="flex items-end gap-3 min-w-[250px]">
          <Image src="/box.png" alt="pencil box" width={40} height={40} />
          <h2 className="text-[23px] font-bold text-black">About Our School</h2>
        </div>

        {/* Right: Two paragraphs */}
        <div className="flex flex-col gap-6 text-[#767676] text-base leading-relaxed">
          <p>
            We don&apos;t just give students an education and experiences that
            set them up for success in a career. We help them succeed in their
            career—to discover a field they&apos;re passionate about and dare to
            lead it.
          </p>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
