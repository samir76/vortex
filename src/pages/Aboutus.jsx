// import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { AboutusPages } from './Data';


export default function Aboutus() {

  return (
    <>
 <div className="min-h-screen max-w-6xl mx-auto px-5">
      <Header />

      <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-5 md:py-14 mx-auto">
        {/* <h1 className="my-4 text-center text-3xl font-bold text-gray-800 sm:text-3xl md:my-6">About us</h1> */}
        <h2 class="font-bold text-5xl mt-5 text-center tracking-tight md:my-6">About Us</h2>

          <div className="-my-8 divide-y-2 divide-gray-100">
            {AboutusPages.map((item, index) => (
              <div key={item.id} className="py-8 flex flex-wrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">{item.MainCat}</span>
                </div>
                <div className="md:flex-grow">
  <p> {Array.isArray(item.Paragraph) ? item.Paragraph[0] : item.Paragraph}</p>
  <p>
    <Link 
      to={item.Link} 
      className="text-green-500 inline-flex items-center mt-4" 
    >
      Learn More here
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </p>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
       </div>
    </>
  )
}