import React from 'react'
import Image from 'next/image'

const HeroAbout = () => {
  return (
    <div className='relative w-full overflow-hidden'>
        <Image src="/about.jpg" alt="about" width={800} height={100} className='w-full h-150 object-cover' />
        <div className='absolute inset-0 z-10 bg-black/30'/>
        <div className='absolute inset-0 items-around justify-end z-20 flex flex-col text-white min-[568px]:mx-40 min-[568px]:my-20 m-20'>
            <p className='text-2xl'>Know Us Better</p>
            <p className='font-bold text-5xl'>About Us</p>
        </div>
    </div>
  )
}

export default HeroAbout