import Image from 'next/image'
import React from 'react'

const Goal = () => {
  return (
    <div className="flex max-w-full">
        <Image
            src="/goal.jpg"
            alt="tour"
            width={1000}
            height={1000}
            className="max-w-full w-1/2 max-h-full max-[1100px]:hidden"
        />
        <div className="flex flex-col items-start justify-center gap-3 p-25 md:px-50 bg-[#F2F2F2] max-w-full min-[1284px]:w-1/2">
            <h1 className="text-[200px] text-[#64BEE6] m-0">“</h1>
            <h2 className="text-2xl font-bold text-[#2D2D2D] mt-[-160px]">Our goal is to be at the heart of the financial services industry as businesses expand across.</h2>
            <p className="leading-relaxed text-[#2D2D2D]">John Smith / CEO Of Financity</p>
        </div>
    </div>
  )
}

export default Goal