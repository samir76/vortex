import React, { useState } from "react";
import logo from "../img/vortex-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

import { Navitems } from "./Data";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation(); // Get the location here

  // Move isActiveAboutUs inside the component
  const isActiveAboutUs = location.pathname.startsWith('/aboutus');

  return (
    <div className="max-w-6xl mx-auto">
      <nav className="container px-5 flex justify-between items-center mx-auto">
        <div className="md:block md:w-auto" id="navbar-default">
          <Link to="/" className="-m-1 p-1">
            <span className="sr-only">Vortex Logo</span>
            <img className="h-14 w-auto" src={logo} alt="Vortex Logo"></img>
          </Link>
        </div>

        <ul className="list-none md:flex hidden justify-end items-center flex-1 md:space-x-8">
          {Navitems.map((item) => (
            <li key={item.title}>
              <NavLink
                className={({ isActive }) => {
                  let baseClass = "text-base font-medium";
                  if (item.title === "About Us" && isActiveAboutUs) {
                    return "text-emerald-600 text-base font-medium";
                  }
                  return isActive ? "text-emerald-600 text-base font-medium" : baseClass;
                }}
                exact="true"
                to={item.url}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <MdClose 
              className="object-contain text-4xl m-3 p-1 text-gray-900 shadow-xl cursor-pointer border border-gray-900 rounded-md"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <RxHamburgerMenu 
              className="object-contain text-4xl m-3 p-1 text-gray-900 shadow-xl cursor-pointer border border-gray-900 rounded-md"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } text-sm z-10 border-spacing-3 border p-6 bg-gray-50 absolute top-20 right-0 mx-4 my-5 rounded-xl sidebar `}
          >
            <ul className="list-none flex justify-end items-end gap-3 flex-1 flex-col">
              {Navitems.map((item) => (
                <li key={item.title}>
                  <NavLink
                    className={({ isActive }) => {
                      let baseClass = "text-base font-medium";
                      if (item.title === "About Us" && isActiveAboutUs) {
                        return "underline text-base text-emerald-600 font-bold";
                      }
                      return isActive ? "underline text-lg text-emerald-600 font-extrabold" : baseClass;
                    }}
                    exact="true"
                    to={item.url}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}