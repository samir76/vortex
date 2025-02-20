import React, { useState } from "react";
import { MoveRight, PhoneCall } from "lucide-react";

import Header from './Header';
import Footer from './Footer';
import { Phones, SocialLink, PastSale } from "./Data";
import RamSalesVortexWS from "../img/RamSales-VortexWS.png";
// import Image from 'next/image';



export default function Home() {
  const [showPhoneNumbers, setShowPhoneNumbers] = useState(false);

  const handleCallButtonClick = () => {
    setShowPhoneNumbers(true);
  };

  const handlePhoneNumberClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
    setShowPhoneNumbers(false); 
  };

  const handleCloseClick = () => {
    setShowPhoneNumbers(false); 
  };


  return (
      <div className="min-h-screen max-w-6xl mx-auto px-5">
      <Header />
      <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
              <div className="flex gap-4 flex-col">
                <div></div>
                <div className="flex gap-4 flex-col">
                  <h1 className="text-3xl md:text-5xl font-semibold md:font-light max-w-lg tracking-tight text-left font-regular">
                    Our Annual Ram sale is on the 25th September 2024
                  </h1>
                  <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                    Our best Charollais and White Suffolk rams will be available at<br/>
                    <span className="italic font-semibold text-xl">Benalla Showgrounds</span>
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                <button className="text-white m-auto text-center bg-green-600 flex flex-row justify-center items-center border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded-2xl text-lg">
                   <a href="ramsales"> More Information HERE </a><MoveRight className="mx-2 w-4 h-4" />
                  </button>
                  <button
                    className="flex flex-row justify-center items-center
                     text-white m-auto text-center bg-green-600 border-0 
                     py-2 px-6 focus:outline-none hover:bg-green-700 rounded-2xl text-lg"
                    onClick={handleCallButtonClick}
                  >
                    Jump on a call <PhoneCall className="mx-2 w-4 h-4" />
                  </button>
                  
                </div>
              </div>
              <div>
                <img className="object-cover object-center rounded-xl" alt="hero" src={RamSalesVortexWS} />
              </div>
            </div>

        {showPhoneNumbers && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-lg font-bold mb-2">Choose a phone number to call: </h2>
              <ul>
                {Phones.map((phone) => (
                  <li key={phone.id} className="py-2">
                    <button
                      className="text-green-500 hover:underline"
                      onClick={() => handlePhoneNumberClick(phone.phone)}
                    >
                      {phone.name} - {phone.phone}
                    </button>
                  </li>
                ))}
              </ul>
              <button className="bg-gray-200 px-3 py-1 rounded mt-2" onClick={handleCloseClick}>
                Close
              </button>
            </div>
          </div>
        )}
    </div>

    <div className="bg-gray-400 max-w-full px-5 mt-5 mx-auto rounded-lg">
                <h4 className="text-center text-white text-xl font-bold pt-2 ">Keep Up To Date by Following us on our Social Media</h4>
                    <div className="flex flex-row items-center justify-center pb-2">
                        {SocialLink && SocialLink.map((item) => (
                            <p key={item.id} className="text-white flex flex-row align-middle justify-center text-base md:text-lg font-semibold">
                            <span className="pl-5 pr-1 my-1 mx-auto">{item.icon}</span> 
                                <a href={item.link}>{item.text}</a>
                            </p>
                        ))}
                    </div>
                </div>


<div className="mb-4 mt-10">
<h1 className="text-start text-3xl mb-5 font-bold text-gray-800 sm:text-3xl flex items-center">Our Ram Sale <span className=" bg-green-600 text-white py-1 px-4 text-lg rounded-2xl font-medium hover:bg-green-500 transition-colors mx-2 duration-200"><a href="/Salehistory">View More</a></span></h1>

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {PastSale && PastSale.slice(0, 3).map((sale) => (
    <div key={sale.id} className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full">
      <div className="relative">
        <img src={sale.img} alt={sale.alt} className="w-full h-64 object-cover" />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-4 h-4 text-center text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{sale.title}</h2>
            <p className="text-sm text-gray-600">{sale.papertitle}</p>
          </div>
        </div>
        <div className="py-2">
          <p className="text-lg font-bold text-green-600">{sale.publishdate}</p>
          <p className="text-sm text-gray-500 line-through"></p>
        </div>
        <p className="text-gray-600 text-sm mb-4">{sale.desc}</p>
        <div className="flex space-x-2">
          <button className="flex-1 bg-green-600 text-white py-2 rounded-full font-semibold hover:bg-green-500 transition-colors duration-200">
            <a href={sale.url}>Read More</a>
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-200">
            <a href={sale.urlauction}>Auction Plus</a>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
</div>






























      <Footer />
    </div>
  );
}