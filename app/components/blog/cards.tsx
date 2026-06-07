import React from 'react'
import Image from 'next/image'
import { MessageCircleIcon } from 'lucide-react'
import { cards } from '@/app/constants'
import Link from 'next/link'

const CARDS_PER_PAGE = 6

const Cards = ({ currentPage }: { currentPage: number }) => {
  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE)
  const start = (currentPage - 1) * CARDS_PER_PAGE
  const paginated = cards.slice(start, start + CARDS_PER_PAGE)

  return (
    <div className='flex flex-col items-center bg-[#F7F7F7]'>
      <div className="flex flex-col text-black bg-[#F7F7F7] shadow-md min-[720px]:w-150 max-[720px]:p-4 gap-10">
        {paginated.map((item) => (
          <div key={item.id} className='p-5 bg-[#F7F7F7]'>
            {item.image && (
              <Image src={item.image} alt="image" width={400} height={400} className='w-full min-[720px]:h-100' />
            )}
            <div className="min-[720px]:p-4">
              <h3 className="text-xl font-bold text-black mb-5">{item.title}</h3>
              <p className="mb-3 flex items-center gap-2">
                {item.date} <MessageCircleIcon size={20}/> 0
              </p>
              <p className="mb-3">{item.description}</p>
              <button className="flex bg-[#64BEE6] text-white mt-5 hover:cursor-pointer px-5 py-3">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-row'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link key={page} href={`/blog/${page}`}>
            <button className={`hover:cursor-pointer w-10 h-10 m-5 rounded-full text-sm font-bold
              ${page === currentPage ? 'bg-[#64BEE6] text-white' : 'bg-[#F0F0F0] text-[#919191] hover:bg-[#64BEE6] hover:text-white'}`}>
              {page}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Cards