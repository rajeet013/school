"use client";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navImages, slides } from "../../constants";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Image zoom (background animation)
    tl.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0.8 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out" },
    );

    // subtitle
    tl.fromTo(
      subtitleRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
    );

    // title
    tl.fromTo(
      titleRef.current,
      { y: 0, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
      "-=0.4", // optional overlap
    );

    // Description
    tl.fromTo(
      descRef.current,
      { y: 0, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 },
      "-=0.5",
    );

    // Button
    tl.fromTo(
      btnRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3 },
      "-=0.4",
    );
  }, [current]);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-white">
      {/* Hero Slider */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Image
          ref={imageRef}
          src={slides[current].image}
          alt="hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-24">
          <h1 ref={titleRef} className="text-white text-8xl font-bold">
            {slides[current].title}
          </h1>

          <h2 ref={subtitleRef} className="text-[#E87C2A] text-5xl mt-2">
            {slides[current].subtitle}
          </h2>

          <p ref={descRef} className="text-white text-lg mt-6 max-w-xl">
            {slides[current].description}
          </p>

          <button
            ref={btnRef}
            className="mt-8 w-fit bg-[#64BEE6] text-white px-8 py-3 rounded"
          >
            {slides[current].button}
          </button>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${i === current ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>{" "}
      {/* ← Hero ends here */}
      {/* Nav Image Cards */}
      <div className="flex max-[768px]:flex-col items-center justify-center gap-8 px-16 py-16 bg-white">
        {navImages.map((item, index) => {
          const colors = ["#64BEE6", "#DC3C3A", "#E87C2A"]; // blue, red, orange
          const color = colors[index % colors.length];

          return (
            <div key={index} className="flex flex-col items-center w-90">
              {/* Image */}
              <div className="relative inset-1.5 z-4 w-full h-64 overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Title */}
              <h2 className="text-2xl font-bold mt-6 mb-3" style={{ color }}>
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Button */}
              <button
                className="mt-6 px-8 py-3 text-white rounded flex items-center gap-2 hover:opacity-90 transition hover:cursor-pointer"
                style={{ backgroundColor: color }}
              >
                {item.button} <span>→</span>
              </button>

              {/* Bottom colored line */}
              <div
                className="w-full h-0.75 mt-6"
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
