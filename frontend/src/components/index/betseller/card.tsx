import React from 'react';

interface CardProps {
    title: string;
    description?: string;
    imageUrl?: string;
    discount?: boolean;
    discountValue?: string;
    value?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, discount, discountValue, value }) => {
    return (
        <div className="grid grid-cols-1 grid-rows-[350px,auto,auto] gap-4">
            <div className="relative w-full h-[350px] bg-[#F1F1F3] overflow-hidden group">
                {imageUrl && (
                    <>
                        <img 
                            src={imageUrl} 
                            alt={title} 
                            className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-50" 
                        />
                        {/* Overlay con botones */}
                        <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="w-10 h-10 cursor-pointer bg-white rounded-full hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center">                                
                                <svg width="20" height="20" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                                    <path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <button className="w-10 h-10 cursor-pointer bg-white rounded-full hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center">
                                <svg className='rotate-90' width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M17 20V4M17 4L20 7M17 4L14 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 4V20M7 20L10 17M7 20L4 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                            <a href='#' className="w-10 h-10 bg-white rounded-full hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M3 13C6.6 5 17.4 5 21 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </div>
                        {/* Botón Add to Cart */}
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="w-full py-4 cursor-pointer bg-white hover:bg-black hover:text-white transition-colors duration-200 text-sm font-medium rounded-lg">
                                Add to Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
            <div className="">
                <h3 className="text-lg font-medium">{title}</h3>
                {description && <p className="text-gray-600 text-sm">{description}</p>}
            </div>
            <div className="flex items-center gap-2">
                {discount && <span className="text-neutral-950 font-normal">{discountValue}</span>}
                {value && (
                    <span
                        className={`font-normal ${
                            discount
                                ? 'line-through text-[#B0ADB5]'
                                : 'text-neutral-950'
                        }`}
                    >
                        {value}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Card;