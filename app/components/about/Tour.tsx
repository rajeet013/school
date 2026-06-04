import { tour } from "@/app/constants/tour";
import Image from "next/image";

const Tour = () => {
  return (
    <div className="bg-white text-black">
      {tour.map((item) => (
        <div key={item.id}>
          {item.id % 2 !== 0 ? (
            <div className="flex">
              <div className="flex flex-col items-start justify-center gap-3 p-6 md:max-w-1/2">
                <div>
                  <item.icon size={70} />
                </div>
                <h1 className="text-4xl font-bold">{item.title}</h1>
                <p className="leading-relaxed">{item.description}</p>
              </div>
              <Image
                src={item.image}
                alt="tour"
                width={500}
                height={500}
                className="max-w-full w-full h-full max-[1284px]:hidden"
              />
            </div>
          ) : (
            <div className="flex">
              <Image
                src={item.image}
                alt="tour"
                width={500}
                height={500}
                className="max-w-full w-full h-full max-[1284px]:hidden"
              />
              <div className="flex flex-col items-start justify-center gap-3 p-6 md:max-w-1/2">
                <div>
                  <item.icon size={70} />
                </div>
                <h1 className="text-4xl font-bold">{item.title}</h1>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tour;
