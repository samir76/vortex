import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { PastSale } from "./Data";

export default function Saleshistory() {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto">
              <div className="bg-white py-4 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    {/* <h1 className="my-4 text-center text-3xl font-bold text-gray-800 sm:text-3xl md:my-6">Past Sale Results</h1> */}
                    <h2 class="font-bold text-5xl mt-5 text-center tracking-tight md:my-6">Past Sale Results</h2>

                    <p className="mx-auto max-w-screen-xl text-center text-gray-500 my-5 md:text-lg">Have a look below at newspaper reports and Visit AuctionPlus for more information. </p>
                </div>

                <div className="grid mx-5 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">


                    {
                        PastSale.map((sale) => {
                            return (
                                <div key={sale.id} className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                                    <Link to={sale.url} className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48 ">
                                        <img className="w-full h-full object-cover" src={sale.img} alt={sale.alt} />
                                    </Link>

                                    <div className="flex flex-col gap-2 p-2 lg:p-4">
                                        
                                        <h2 className="text-xl font-bold text-gray-800">{sale.title}</h2>
                                        <span className="text-sm leading-3 italic text-gray-600">Written by: {sale.papertitle}</span>
                                        <span className="text-sm  leading-3 text-gray-400">{sale.publishdate}</span>
                                        <p className="text-gray-500 font-light text-sm line-clamp-3">{sale.desc}</p>
                                        <div className="flex flex-col gap-3">
                                            <Link to={sale.url} className="font-semibold text-green-500 transition duration-100 hover:text-green-600 active:text-green-700">Visit The paper</Link>
                                            {sale.urlauction && (
                                                <Link to={sale.urlauction} className="font-semibold text-green-500 transition duration-100 hover:text-green-600 active:text-green-700">Visit AuctionPlus</Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <Footer />
            </div>
        </>
    )
}