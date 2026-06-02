import React from 'react'
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const properties = [
    {
        image: "/visit_school.png",
        title: "Visit School",
        description: "Parents can arrange appointment for school tour",
    },
    {
        image: "/meals.png",
        title: "School Meals",
        description: "All students can enjoy free breakfast and lunch at school.",
    },
    {
        image: "/transport.png",
        title: "Transport",
        description: "All about how your children can get to school",
    }
]

const Facilities = () => {
  return (
    <div className="flex bg-[#272727] items-center justify-center gap-8 py-16">
        {properties.map((property, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
                <Image src={property.image} alt={property.title} width={60} height={60} />
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold">{property.title}</h3>
                    <p>{property.description}</p>
                    <div className="text-[#DC3C3A] flex items-end gap-2 hover:text-white hover:cursor-pointer">
                        <p className="mt-10">Read More</p>
                        <ArrowRight />
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Facilities