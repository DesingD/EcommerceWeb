import React from 'react';
import Countdown from './Contar'

const Deals: React.FC = () => {
    return (
        <div className='flex px-40 py-12'>
            <div className="w-2/3 mt-6">
                <div className="">
                    <h2 className=" text-4xl">Deals of the Day</h2>
                    <p className="mt-3 pr-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a mor-or-less normal distribution of letters</p>
                </div>
                <div className="my-6">
                    <Countdown endDate={new Date('2025-12-31T23:59:59')} />
                </div>
                <div className="mt-13">
                    <a href="#" className="bg-[#131118] text-white text-sm px-4 py-3 rounded-md inline-flex items-center">
                        <span>View All Products</span>
                        <svg className="ml-2 w-[15px] h-[15px]" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                            <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="">
                <img src="/BG/deals.png" alt="deals image" />
            </div>
        </div>
    );
};

export default Deals;   