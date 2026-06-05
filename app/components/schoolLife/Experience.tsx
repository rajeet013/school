import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className="relative w-full overflow-hidden">
          <Image
            src="/event-background.jpg"
            alt="event"
            width={800}
            height={400}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-10" />
          <div className="absolute inset-0 items-start justify-center z-20 flex flex-col min-[1260px]:flex-row text-white p-24 min-[1260px]:px-60 min-[1260px]:py-30 gap-4 min-[1260px]:gap-20">
            <div className="flex flex-col">
              <h1 className="font-bold text-4xl">The School Experience</h1>
            </div>
              <p className="text-base md:text-xl max-w-2xl leading-relaxed">
                Kingster Kindergarten was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.
              </p>
          </div>
        </div>
  )
}

export default Experience