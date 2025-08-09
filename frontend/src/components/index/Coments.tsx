"use client";
import React, { useRef, useEffect } from 'react';
import StarRating from './Starts';

const Coments: React.FC = () => {
    const [startIndex, setStartIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [slideDirection, setSlideDirection] = React.useState<'left' | 'right' | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const coments = [
        {
            description: 'It is a long established fact that a reader will be distracted by de readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
            rating: 5,
            user: {
                name: 'Leslie Alexander',
                image: '/users/1.jpg',
                carrer: 'Model'
            },
        },
        {
            description: 'It is a long established fact that a reader will be distracted by de readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
            rating: 4.9,
            user: {
                name: 'Jacob Jones',
                image: '/users/4.jpg',
                carrer: 'Co-founder'
            },
        },
        {
            description: 'It is a long established fact that a reader will be distracted by de readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
            rating: 2,
            user: {
                name: 'Jenny Wilson',
                image: '/users/2.jpg',
                carrer: 'Fashion Designer'
            },
        },
        {
            description: 'It is a long established fact that a reader will be distracted by de readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
            rating: 3.5,
            user: {
                name: 'Dany Mitte',
                image: '/users/3.jpg',
                carrer: 'Founder'
            },
        },
    ];

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('right');
                
        setStartIndex((prevIndex) => 
            prevIndex + 1 >= coments.length - 2 ? 0 : prevIndex + 1
        );
        
        setTimeout(() => {
            setIsAnimating(false);
            setSlideDirection(null);
        }, 500);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('left');
        
        setStartIndex((prevIndex) => 
            prevIndex === 0 ? coments.length - 3 : prevIndex - 1
        );
        
        setTimeout(() => {
            setIsAnimating(false);
            setSlideDirection(null);
        }, 500);
    };

    return (
        <section className="px-40 py-16 bg-[#FAFAFB]">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-regular">What our Customer say's</h2>
                <div className="flex gap-2">
                    <button 
                        onClick={handlePrev} 
                        className="w-10 h-10 rounded-md bg-[#f6f6f6] flex items-center justify-center hover:scale-105 transition-all"
                        disabled={isAnimating}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/></svg>
                    </button>
                    <button 
                        onClick={handleNext} 
                        className="w-10 h-10 rounded-md bg-[#131118] flex items-center justify-center text-white hover:scale-105 transition-all"
                        disabled={isAnimating}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${startIndex * 33.33}%)`,
                    }}
                >
                    {coments.map((coment, index) => (
                        <div 
                            key={index} 
                            className={`w-1/3 flex-shrink-0 px-2 transition-all duration-500
                                ${isAnimating && slideDirection === 'right' ? 'animate-slide-left' : ''}
                                ${isAnimating && slideDirection === 'left' ? 'animate-slide-right' : ''}
                            `}
                        >
                            <div className="bg-white p-6 text-black">
                                <div className="">
                                    <StarRating rating={coment.rating} />
                                </div>                
                                <div className="mt-4">
                                    <p className="text-sm">{coment.description}</p>
                                </div>
                                <div className="flex gap-4 items-center mt-6">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img 
                                            className="w-full h-full object-cover"
                                            src={coment.user.image} 
                                            alt={`Profile picture of ${coment.user.name}`}
                                        />
                                    </div>
                                    <div className="">
                                        <p className="font-bold">{coment.user.name}</p>
                                        <p className="text-sm text-[#BAB8BF]">{coment.user.carrer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>    
        </section>
    );
};

export default Coments;
