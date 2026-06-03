import { images } from "@/app/constants";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-full flex flex-col items-center min-[1280px]:flex-row bg-white">
      {images.map((item, index) => (
        <Image
          key={item.image}
          src={item.image}
          width={150}
          height={150}
          alt="gallery"
          className="max-[1280px]:w-100 min-[1284px]:w-full min-[768px]:h-auto object-cover"
        />
      ))}
    </div>
  );
};

export default Gallery;
