import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon, MapPinnedIcon } from 'lucide-react'

const data = [
    {
        image: "/news_1.jpg",
        title: "June 6, 2016 / Hot, Updates",
        description: "A Global MBA for the next generation of business leaders",
    },
    {
        image: "/news_2.jpg",
        title: "June 6, 2016 / Admission, Event",
        description: "Professor Tom comments on voluntary recalls by snack brands",
    },
    {
        image: "/news_3.jpg",
        title: "June 6, 2016 / Article, Research",
        description: "Professor Alexa is interviewed about Twitter’s valuation",
    },
]

const date = [
    {
        number: "07",
        month: "JAN",
        title: "Reunion Event : Kingster’s Alumni Golf Tour",
        time: "7:00 am - 7:00 am",
    },
    {
        number: "01",
        month: "JAN",
        title: "Kingster’s Alumni Hot Air Ballon Trip in Turkey",
        time: "10:00 am - 10:00 am",
    },
    {
        number: "17",
        month: "DEC",
        title: "Fintech & Key Investment Conference",
        time: "1:00 pm - 1:00 pm",
    },
]

const News = () => {
  return (
    <div className="flex">
        <div className="bg-[#67BCDF] p-20">
            <div className="flex items-end gap-4">
                <Image src="/blog-title.png" alt="news" width={50} height={50} />
                <h2 className="text-xl font-bold">News & Update</h2>
            </div>
            <div className="flex items-center gap-10 mt-5">
                <div>
                <p className="text-[#313131] mt-3">Read All News</p>
                <Image src="/new.jpg" alt="news" width={400} height={400} />
                <p className="text-[#BFEBFE] mt-5 font-bold">June 6, 2016 / Admission, Student</p>
                <p className="font-bold">Professor Albert joint research on mobile money in Tanzania</p>
            </div>
                <div>
                    {data.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 mt-5">
                            <Image src={item.image} alt={`news_${index}`} width={100} height={100} />
                            <div>
                                <p className="text-[#BFEBFE] font-bold">{item.title}</p>
                                <p className="font-bold text-[#FFFFFF]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="bg-[#F5F5F5] p-20">
            <h2 className="text-xl font-bold text-[#DC3C3A]">Upcoming Events</h2>

            {date.map((item, index) => (
                <div key={index} className="flex items-start gap-4 mt-5">
                    <div className=" text-[#64BEE6] p-4 text-center">
                        <p className="text-lg font-bold">{item.number}</p>
                        <p className="text-sm">{item.month}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-black">{item.title}</h3>
                        <div className="flex items-center gap-2">
                            <p className="text-black">{item.time}</p>
                            <MapPinnedIcon className="text-black mt-2" />
                            <p className="text-black">Kingster Hall</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex items-end gap-2 mt-5">
                <p className="font-bold text-[#DD5352] hover:cursor-pointer">View All Events</p>
                <ArrowRightIcon className="text-[#DD5352] mt-2" />
            </div>
        </div>
    </div>
  )
}

export default News