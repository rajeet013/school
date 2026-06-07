"use client";
import { slide } from "@/app/constants";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonal = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center bg-[url('/testimonial-bg.jpg')] bg-cover bg-center bg-no-repeat py-40">
      <h1 className="uppercase text-md font-mono">Testimonial</h1>
      <p className="font-bold text-3xl">What Parents Say</p>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-center leading-relaxed max-w-4xl mt-5 text-xl">
            Far far away, behind the word mountains, far from the countries Vokalia
            and Consonantia, there live the blind texts. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language
            ocean. A small river named Duden flows by their place and.
          </p>
          <p className="text-8xl text-[#64BEE6] mt-5">"</p>
          <div className="flex items-start justify-center gap-3">
            <Image
              src={slide[current].image}
              alt="parent"
              width={70}
              height={70}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold">{slide[current].name}</p>
              <p>{slide[current].parent}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2 mt-4">
        {slide.map((_, index) => (
          <p
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition hover:cursor-pointer ${index === current ? "bg-[#8a8a8a]" : "bg-white/40"}`}
          ></p>
        ))}
      </div>
    </div>
  );
};

export default Testimonal;