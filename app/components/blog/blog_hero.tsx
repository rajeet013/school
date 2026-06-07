import React from 'react'
import Image from 'next/image'

const BlogHero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/philosophy.jpg')] bg-cover bg-center bg-no-repeat h-80 p-4">
        <div className='flex flex-col gap-2 leading-relaxed'>
            <p className='text-2xl text-center'>Caption align here</p>
            <p className='text-5xl font-bold'>Blog Full Both Sidebar With Frame</p>
        </div>
    </div>
  )
}

export default BlogHero