import Header from './Header';
import Footer from './Footer';
import { CharollaisVids, CharollaisData } from './Data';
import {ImVideoCamera} from 'react-icons/im';


export default function Charollais() {
  
  const charollaisContent = CharollaisData[0].Paragraph;

  return (
    <>
      <Header />

        <div className="mx-auto max-w-screen-xl px-4 md:px-8">

        <h2 class="font-bold text-5xl mt-5 text-center tracking-tight md:my-6">Charollais</h2>

          <div className="grid col-span-2 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-4">

{Array.isArray(charollaisContent) ? (
  charollaisContent.map((paragraph, index) => (
    <p key={index} className="py-2 leading-relaxed text-gray-800">
      {paragraph}
    </p>
  ))
) : (
  <p className="leading-relaxed">{charollaisContent}</p>
)}
</div>
<div className="flex flex-col  gap-4">
              {CharollaisVids.map((item) => {
                return (
                  <div key={item.id} className="relative flex flex-col items-center py-3 mb-4 overflow-hidden">
                    <video width={item.width} height={item.height} controls>
                      <source src={item.src} type="video/mp4" />
                    </video>

                    <p className="text-center text-gray-500 text-base font-medium
                    py-2 leading-relaxed">
                      <ImVideoCamera className="text-left inline text-3xl pr-3"/>{item.title}</p>
                  </div>
                )
              })}
              </div>
            </div>
          </div>

          <Footer />
        </>
      )
    }
