import logo from "../img/vortex-logo.png";
import { Phones } from "./Data";
import { Link } from "react-router-dom";
import { GrFacebookOption, GrInstagram} from "react-icons/gr";

export default function Footer() {
  return (
    <>

<footer className="text-gray-50 bg-gray-100 body-font">
  <div className="container mx-auto max-w-6xl md:px-8 mt-5 pt-5 flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
  
   
          <div className="w-60 flex-shrink-0 mx-auto text-center md:mt-0">
            <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img className="h-14 w-auto" src={logo} alt="Vortex Logo" />
            </Link>

            <div className="container mx-auto py-2 flex flex-wrap flex-row justify-start">
              <Link to="https://www.facebook.com/vortexws" className="text-gray-500 py-1 text-lg justify-self-start font-semibold">
                  <GrFacebookOption />
              </Link>
              <Link  to="https://www.instagram.com/vortexchws/" className="text-gray-500  py-1 mr-3 text-lg font-semibold">
                  <GrInstagram />
              </Link>
              <p className="text-gray-500 text-base font-semibold">© 2023 Vortex</p>
            </div>

            
          </div>

          <div className="flex-grow flex flex-wrap md:pr-0 mb-5 md:text-left text-center">
            <div className="lg:w-1/2 md:w-1/2 w-full px-2">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PHONE</h2>
              <nav className="list-none justify-start mb-3">
                {Phones.map((phone) => (
                  <li key={phone.id}>
                    <p className="text-gray-600 hover:text-gray-800"><strong>{phone.name}</strong> : {phone.phone}</p>
                  </li>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ADDRESS</h2>
              <nav className="list-none mb-5">
              <li>
                  <p className="text-gray-600 hover:text-gray-800">R, E & D Hooper</p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800">1093 Benalla-Yarrawonga Road</p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800">Goorambat, Victoria, Australia, 3725</p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800"><strong>E-Mail: </strong>vortex.ws@bigpond.com</p>
                </li>
              </nav>
            </div>
          </div>
        </div>

      </footer>

    </>
  )
}
