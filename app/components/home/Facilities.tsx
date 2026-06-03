import { properties } from "@/app/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Facilities = () => {
  return (
    <div className="flex flex-col min-[1260px]:flex-row bg-[#272727] items-center justify-center gap-8 py-16 md:px-60">
      {properties.map((property, index) => (
        <div key={index} className="flex items-start gap-4 p-5">
          <Image
            src={property.image}
            alt={property.title}
            width={60}
            height={60}
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">{property.title}</h3>
            <p className="leading-relaxed text-[16px]">{property.description}</p>
            <div className="text-[#DC3C3A] flex items-end gap-2 hover:text-white hover:cursor-pointer">
              <p className="mt-10">Read More</p>
              <ArrowRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
