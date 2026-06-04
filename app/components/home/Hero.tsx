"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { navImages, slides } from "../../constants";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageAnim = {
  hidden: { opacity: 0.75 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const subtitleAnim = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const titleAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
};

const descAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.3 },
  },
};

const buttonAnim = {
  hidden: { x: -30, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: 0.4 },
  },
};

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-white">
      <div className="relative w-full h-[90vh] overflow-hidden">
        <motion.div
          key={current}
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full h-full bg-black bg-blend-darken"
        >
          {/* OUTGOING IMAGE */}
          <AnimatePresence>
            {prev !== null && slides[prev] && (
              <motion.div
                key={prev}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[prev].image}
                  alt="prev"
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* INCOMING IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current].image}
                alt="current"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-center px-24 md:px-60">
            <motion.h1
              variants={titleAnim}
              className="text-white text-6xl md:text-8xl font-bold"
            >
              {slides[current].title}
            </motion.h1>

            <motion.h2
              variants={subtitleAnim}
              className="text-[#E87C2A] text-4xl md:text-6xl mt-2"
            >
              {slides[current].subtitle}
            </motion.h2>

            <motion.p
              variants={descAnim}
              className="text-white text-lg mt-6 max-w-xl"
            >
              {slides[current].description}
            </motion.p>

            <motion.button
              variants={buttonAnim}
              className="mt-8 w-fit bg-[#64BEE6] text-white px-8 py-3 rounded"
            >
              {slides[current].button}
            </motion.button>
          </div>
        </motion.div>

        {/* ================= ARROWS ================= */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:cursor-pointer"
        >
          <ChevronLeft size={60} />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:cursor-pointer"
        >
          <ChevronRight size={60} />
        </button>

        {/* ================= DOTS ================= */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex max-[768px]:flex-col items-center justify-center gap-8 px-16 py-16 bg-white">
        {navImages.map((item, index) => {
          const colors = ["#64BEE6", "#DC3C3A", "#E87C2A"];
          const color = colors[index % colors.length];

          return (
            <div key={index} className="flex flex-col items-center w-90">
              <div className="relative w-full h-64 overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold mt-6 mb-3" style={{ color }}>
                {item.title}
              </h2>

              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {item.description}
              </p>

              <button
                className="mt-6 px-8 py-3 text-white rounded flex items-center gap-2"
                style={{ backgroundColor: color }}
              >
                {item.button} →
              </button>

              <div
                className="w-full h-[2px] mt-6"
                style={{ backgroundColor: color }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
