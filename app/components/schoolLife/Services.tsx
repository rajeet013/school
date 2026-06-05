import { services_school } from '@/app/constants/services_school'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 md:px-60">
      <div className="flex flex-col min-[1280px]:flex-row p-10 gap-10 justify-center">
        {services_school.map((item) => (
          <div key={item.id} className="flex flex-col text-black shadow-md">
            <Image src={item.image} alt="image" width={400} height={400} />
            <div className="p-4">
              <h3 className="text-xl font-bold text-black mb-5">
                {item.title}
              </h3>
              <p className="mb-3">
                {item.description}
              </p>
              <div className="flex text-[#DC3C3A] mt-5 hover:text-black hover:cursor-pointer">
                <p>Read More</p>
                <ArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services