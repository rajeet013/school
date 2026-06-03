import { images } from "@/app/constants";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-full flex flex-col items-center min-[768px]:flex-row bg-white">
      {images.map((item, index) => (
        <Image
          key={item.image}
          src={item.image}
          width={120}
          height={120}
          alt="gallery"
          className="max-[768px]:w-100 min-[768px]:w-full min-[768px]:h-auto object-cover"
        />
      ))}
    </div>
  );
};

export default Gallery;
