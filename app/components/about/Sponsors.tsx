import React from 'react'
import { sponsor } from '@/app/constants/sponsors'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-[#64BEE6] md:h-55'>
        {sponsor.map((item, index) => (
            <Image key={item.id} src={item.image} alt="sponsors" width={300} height={300} />
        ))}
    </div>
  )
}

export default Sponsors