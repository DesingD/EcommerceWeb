"use client";
import React from "react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <nav className="relative flex items-center justify-between py-6 bg-white text-[#131118] px-9">
      <div className="font-bold text-2xl"><a href="/">Ecommerce</a></div>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li className="">
          <div
            className="flex items-center gap-1 cursor-pointer hover:underline"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span>Shop</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M6 9l6 6 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 w-3/4 bg-white border-t border-gray-200 shadow-lg py-8 top-8/12"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-8">
                  {/* Men Column */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Men</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/men/t-shirts" className="hover:text-gray-600">
                          T-Shirts
                        </a>
                      </li>
                      <li>
                        <a
                          href="/men/casual-shirts"
                          className="hover:text-gray-600"
                        >
                          Casual Shirts
                        </a>
                      </li>
                      <li>
                        <a
                          href="/men/formal-shirts"
                          className="hover:text-gray-600"
                        >
                          Formal Shirts
                        </a>
                      </li>
                      <li>
                        <a href="/men/jackets" className="hover:text-gray-600">
                          Jackets
                        </a>
                      </li>
                      <li>
                        <a href="/men/blazers" className="hover:text-gray-600">
                          Blazers & Coats
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Women Column */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Women</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/women/kurtas" className="hover:text-gray-600">
                          Kurtas & Suits
                        </a>
                      </li>
                      <li>
                        <a href="/women/sarees" className="hover:text-gray-600">
                          Sarees
                        </a>
                      </li>
                      <li>
                        <a href="/women/ethnic" className="hover:text-gray-600">
                          Ethnic Wear
                        </a>
                      </li>
                      <li>
                        <a
                          href="/women/lehenga"
                          className="hover:text-gray-600"
                        >
                          Lehenga Cholis
                        </a>
                      </li>
                      <li>
                        <a
                          href="/women/jackets"
                          className="hover:text-gray-600"
                        >
                          Jackets
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Footwear Column */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Footwear</h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/footwear/flats"
                          className="hover:text-gray-600"
                        >
                          Flats
                        </a>
                      </li>
                      <li>
                        <a
                          href="/footwear/casual"
                          className="hover:text-gray-600"
                        >
                          Casual Shoes
                        </a>
                      </li>
                      <li>
                        <a
                          href="/footwear/heels"
                          className="hover:text-gray-600"
                        >
                          Heels
                        </a>
                      </li>
                      <li>
                        <a
                          href="/footwear/boots"
                          className="hover:text-gray-600"
                        >
                          Boots
                        </a>
                      </li>
                      <li>
                        <a
                          href="/footwear/sports"
                          className="hover:text-gray-600"
                        >
                          Sports Shoes & Floaters
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Kids Column */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Kids</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/kids/tshirts" className="hover:text-gray-600">
                          T-Shirts
                        </a>
                      </li>
                      <li>
                        <a href="/kids/skirts" className="hover:text-gray-600">
                          Skirts
                        </a>
                      </li>
                      <li>
                        <a href="/kids/jeans" className="hover:text-gray-600">
                          Jeans
                        </a>
                      </li>
                      <li>
                        <a
                          href="/kids/trousers"
                          className="hover:text-gray-600"
                        >
                          Trousers
                        </a>
                      </li>
                      <li>
                        <a href="/kids/party" className="hover:text-gray-600">
                          Party Wear
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
        <li>
          <a href="/carrito" className="hover:underline transition-all">
            Our Store
          </a>
        </li>
        <li>
          <a href="/perfil" className="hover:underline transition-all">
            Blog
          </a>
        </li>
        <li>
          <a href="/contacto" className="hover:underline transition-all">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="cursor-pointer hover:scale-110 transition-all">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M17 17L21 21"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button className="cursor-pointer hover:scale-110 transition-all">
          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button className="cursor-pointer hover:scale-110 transition-all">
          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M19.2609 9.69589L20.6455 18.6959C20.8319 19.9074 19.8945 21 18.6688 21H5.33122C4.10545 21 3.16809 19.9074 3.35448 18.6959L4.73909 9.69589C4.8892 8.72022 5.7287 8 6.71584 8H17.2842C18.2713 8 19.1108 8.72022 19.2609 9.69589Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button className="cursor-pointer  bg-[#131118] hover:scale-105 transition-all text-white py-2 px-8 rounded">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
