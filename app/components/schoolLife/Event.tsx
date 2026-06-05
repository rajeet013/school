import React from 'react'
import Image from 'next/image'
import { Award, Car, Dumbbell, LucideDumbbell, ParkingSquare, Ship } from 'lucide-react'
import { GiGymBag } from 'react-icons/gi'

const Event = () => {
  return (
    <div className='flex flex-col min-[768px]:flex-row'>
        <div className='p-4 flex flex-col bg-white max-[768px]:w-full w-1/2 min-[1700px]:px-60 min-[1700px]:py-30 min-[1700px]:gap-10'>
            <h3 className='text-2xl font-bold text-black'>Event and Traditions</h3>
            <p className='text-xl text-[#E03C3A] leading-relaxed'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            <p className='text-[#8F9199] leading-relaxed'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
            <div className="w-full md:w-150 h-1 bg-[#DC3C3A] mt-5 mb-5" />
            <div className='group relative min-[1260px]:w-150 [perspective:1000px]'>
              <div className='flex flex-col bg-[#64BEE6] gap-5 min-[1260px]:w-150 p-10 transition-transform duration-500 ease-out
                  [backface-visibility:hidden] [transform-style:preserve-3d]
                  [transform:rotateY(0deg)]
                  group-hover:[transform:rotateY(-180deg)]'>
                <LucideDumbbell size={40}/>
                <p className='text-xl font-bold'>Student Activities</p>
                <p className='leading-relaxed'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
              </div>
              <div className='flex flex-col absolute inset-0 bg-[#64BEE6] gap-5 min-[1260px]:w-150 p-10 transition-transform duration-500 ease-out
                  [backface-visibility:hidden] [transform-style:preserve-3d]
                  [transform:rotateY(180deg)]
                  group-hover:[transform:rotateY(0deg)]'>
                <Award size={40}/>
                <p className='text-xl font-bold'>Social Life</p>
                <p className='leading-relaxed'>Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.</p>
              </div>
            </div> 
        </div>
        <div className='p-4 gap-4 flex flex-col bg-[#F5F5F5] max-[768px]:w-full w-1/2 min-[1700px]:px-50 min-[1700px]:py-25 min-[1700px]:gap-3'>
            <Image src="/event.jpg" alt="event" width={800} height={500} className='w-200'/>
            <div className='flex text-black items-end gap-3'>
              <Ship size={40}/>
              <h2 className='text-2xl font-bold'>Transportations</h2> 
            </div>
            <div className='flex flex-col gap-5 mt-5'>
              <h3 className='font-bold text-[#8F8F8F]'>There are many options to travel in the campus.</h3>
              <p className='text-[#95918F] leading-relaxed'>There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic. It is a paradise matic country, in which roasted parts of sentences fly into.</p>
            </div>
            <div className='flex text-black items-end gap-3'>
              <Car size={40}/>
              <h2 className='text-2xl font-bold'>Parking</h2> 
            </div>
            <div className='flex flex-col gap-5 mt-5'>
              <p className='text-[#95918F] leading-relaxed'>More than 1000 parking lots avilable in the west side of the compus. <span className='font-bold'>The parking is available 24 hours</span> with 24hours security. We make sure that everything is under control.</p>
            </div>
        </div>
    </div>
  )
}

export default Event