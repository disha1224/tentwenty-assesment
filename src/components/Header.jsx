import React from 'react'; 
import { useState } from "react";
import menuIcon from "../assets/menu.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between nav-content lg:hidden">
        {/* <ContactButton/> */}
        <a href="/" className="flex items-center gap-2 border px-[15px] py-[5px] font-normal text-[16px] "> 
            Contact us 
            <i className="fa-solid fa-arrow-right-long pl-[21px]"></i> 
        </a>  
          <nav>
            <section className="flex lg:hidden bg-[#F9F4EE]">
              <div
                className="space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
              <img src={menuIcon} alt="menu" className="w-[48px] h-[48px]" />
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="#">About</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="#">News</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="#">Services</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="#">Our Team</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="#">Make Enquiry</a>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
      </div>
          
          <div className="absolute top-[22px] z-30 w-full hidden lg:block"> 
            <header className="max-w-[97%] mx-auto flex justify-between items-center pl-[38px] pr-[31px] pt-[33px] pb-[32px] bg-white shadow"> 
            <nav className="space-x-5">
              <a href="#" className="text-black hover:text-green-600 font-normal text-[14px]">About</a>
              <a href="#" className="text-black hover:text-green-600 font-normal text-[14px]">News</a>
              <a href="#" className="text-black hover:text-green-600 font-normal text-[14px]">Services</a>
              <a href="#" className="text-black hover:text-green-600 font-normal text-[14px]">Our Team</a>
              <a href="#" className="text-black hover:text-green-600 font-normal text-[14px]">Make Enquiry</a>
            </nav>
            <a href="/" className="flex items-center gap-2 border px-[15px] py-[5px] font-normal text-[16px] "> 
                Contact us 
                <i className="fa-solid fa-arrow-right-long pl-[6px]"></i> 
            </a>  
          </header>
        </div>
    </div>
  );
}