import React from 'react'
import { philosophy } from '@/app/constants'

const Philosophy = () => {
  return (
    <div className="p-40 gap-5 flex flex-col md:flex-row items-center justify-between bg-[url('/philosophy.jpg')] bg-cover bg-center bg-no-repeat md:px-60">
        {philosophy.map((item, index) => (
            <div key={item.id} className='flex flex-col gap-2'>
                <p className='text-xl text-[#74BEE6] font-bold mb-3'>{item.title}</p>
                <p>{item.paragraph}</p>
            </div>
        ))}
    </div>
  )
}

export default Philosophy