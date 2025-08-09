"use client";
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const InstaHistorys = () => {
  const data = [
    {
        img: '/insta/1.jpg',
        link: 'https://instagram.com/dmitte',
    },
    {
        img: '/insta/2.jpg',
        link: 'https://instagram.com/dmitte',
    },
    {
        img: '/insta/3.jpg',
        link: 'https://instagram.com/dmitte',
    },
    {
        img: '/insta/4.jpg',
        link: 'https://instagram.com/dmitte',
    }
  ]
  return (
    <div className="mt-44 px-40">
        <div className="flex justify-center items-center">
            <h2 className="text-4xl">Our Instagram Stories</h2>            
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
            {data.map((coment, index) => (
                <div key={index} className="relative group overflow-hidden">
                    <img src={coment.img} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[rgba(176,183,186,.20)] bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <a 
                            href={coment.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-black hover:text-gray-700 bg-white rounded-full p-4 w-14 h-14 flex justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <FaInstagram size={30} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InstaHistorys