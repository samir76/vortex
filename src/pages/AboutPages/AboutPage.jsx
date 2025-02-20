import { Link, useLocation } from "react-router-dom";
import { AboutusPages } from '../Data';

export default function AboutPage({ title, content }) {
  const location = useLocation();

  return (
    <>
    <div className="max-w-6xl m-auto">
      <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 sm:text-3xl md:mb-6">About us</h1>

<div className="min-w-full">
      <div className="flex gap-x-5 justify-center flex-wrap md:flex-nowrap bg-gray-200 px-2 mx-auto ">
        {AboutusPages.map((item) => (
          <Link
            key={item.MainCat}
            to={item.Link}
            className={` rounded-md border-gray-200 border-3 bg-gray-50 px-2 text-gray-600 my-4 font-bold inline-flex items-center ${location.pathname === item.Link ? 'bg-green-600 text-white' : 'text-gray-500' }`}
          >

            {item.MainCat}
          </Link>
        ))}
      </div>
      <div className="py-3 flex flex-wrap">
        <div className="max-w-6xl m-auto md:mb-0 mb-6 flex text-gray-700 flex-col px-5 break-words">
          {Array.isArray(content) ? (
            content.map((paragraph, index) => (
              <p key={index} className="py-2 leading-relaxed text-gray-800">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="leading-relaxed">{content}</p>
          )}
        </div>
      </div>
      </div>
    </div>
    </>
  );
}