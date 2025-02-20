import Header from './Header';
import Footer from './Footer';
// import YoutubeEmbed from "./YoutubeEmbed";
import AuctionsPlusBanner from "../img/AuctionsPlusBanner.png"
import { SocialLink, RamSalesLinks } from './Data';

import { Link } from 'react-router-dom';


export default function Ramsales() {
    return (
        <>
            <Header />

            {/* <h1 className="my-4 text-center text-3xl font-bold text-gray-800 sm:text-3xl md:my-6">Ram Sales</h1> */}
            <h2 class="font-bold text-5xl mt-5 text-center tracking-tight md:my-6">Ram Sales</h2>
            

            <section className="flex justify-center antialiased bg-gray-50 text-gray-600 p-4">
                <div className="h-full">

                    

                    <div className="max-w-xl  mx-auto bg-green-600 shadow-lg rounded-lg flex flex-row items-center">
                        <div className="px-6 py-5">
                            <div className="flex items-start">
                                <svg className="fill-current mr-5" width="30" height="30" viewBox="0 0 30 30">
                                    <path className="text-green-300" d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z" />
                                    <path className="text-green-200" d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z" />
                                    <path className="text-green-500" d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z" />
                                </svg>

                                <div>
                                    <div className="w-full sm:flex justify-between items-center mb-3">
                                        <h2 className="text-2xl font-extrabold text-gray-50 mb-1 sm:mb-0 wrap">Yearly Ram Sales - 25th September 2024</h2>

                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="max-w-md text-indigo-100">
                                            <p className="mb-2 text-center">Our best Charollais and White Suffolk rams will be available at our on property ram sale on the 25th September 2024</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <h1 className="flex justify-center antialiased bg-gray-200 p-4 text-3xl font-medium text-gray-900 mx-auto my-5 text-center">Contact Details </h1>

            <section className="max-w-6xl px-5 text-gray-600 body-font mx-auto">
                <div className="flex flex-row flex-wrap -m-4">
                    
                    <div className="flex flex-col m-5 px-4 py-5 w-full md:w-[35%]">

                    
                        <div className="border bg-gray-100 bg-opacity-75 m-2 p-4 align-middle rounded-lg overflow-hidden text-center relative">
                            <h2 className="font-bold text-2xl text-gray-700 mb-4 "> Stud Principal</h2>
                                <h1 className="title-font sm:text-xl text-xl font-medium text-gray-900 mb-3">Daniel Daniel Hooper</h1>
                                <p className="flex justify-center items-end">
                                    <span>
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#fff" />
                                        </svg>
                                    </span>
                                    <span className="ml-2">0437 684786</span></p>
                        </div>

                        <div className="border bg-gray-100 bg-opacity-75 m-2 p-4 align-middle rounded-lg overflow-hidden text-center relative">
                            <h2 className="font-bold text-2xl text-gray-700 mb-4"> Livestock Agent</h2>
                                <h1 className="title-font sm:text-xl text-xl font-medium text-gray-900 mb-3">Margaret Corby <a href="https://www.rodwells.com.au/">(Rodwells Banalla Co.)</a></h1>
                                <p className="flex justify-center items-end">
                                    <span>
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#fff" />
                                        </svg>
                                    </span>
                                    <span className="ml-2">0428 822154</span></p>
                        </div>

                        
                        <div className="bg-gray-100 bg-opacity-75 m-2 p-4 align-middle rounded-lg overflow-hidden text-center relative">
                            <h2 className="font-bold text-2xl text-gray-700 mb-4">Stud Sale Location</h2>
                            <p className="text-xl mt-4 font-light text-gray-800 title-font mb-2 block text-center">Our Sale Location has changed to <br/>
                            <span className="text-2xl text-gray-700 font-bold">Benalla Showgrounds.</span><br/>
                            <div className="justify-center items-center text-white font-bold m-auto text-center bg-green-600 my-3 py-2 px-6 min-w-2xl focus:outline-none hover:bg-green-700 rounded-2xl text-lg">
                            <a href="https://maps.app.goo.gl/QvAFXNtC6UwBdvgv8">Click Here for Directions</a>
                            </div>
                            
                            </p>
                        </div>
                        <div className="bg-gray-100 bg-opacity-75 m-2 p-4 align-middle rounded-lg overflow-hidden text-center relative">
                            <h2 className="font-bold text-2xl text-gray-700 ">Stud e-mail</h2>
                            <p className="text-xl mt-4 font-light text-gray-800 title-font mb-2 block text-center">vortex.ws@bigpond.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col my-5 px-4 py-5 w-full md:w-[60%]">
                        <iframe title="locationMap" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3209.5045556132413!2d145.9865!3d-36.4453611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDI2JzQzLjMiUyAxNDXCsDU5JzExLjQiRQ!5e0!3m2!1sen!2sau!4v1697251059988!5m2!1sen!2sau" className="w-full h-[400px] md:h-[700px] border-0"
  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="bg-gray-100 w-full pt-3 bg-opacity-75 mb-8 p-4 align-middle rounded-lg overflow-hidden text-center relative">
                            <div className="mt-3 h-8 w-full flex justify-center items-center">
                                <img className="text-center" src={AuctionsPlusBanner} alt="Auctions Plus Banner" />
                            </div>
                            <div className="mt-10 text-lg leading-6 text-gray-800">
                                <p>Download the latest copy of our Catalogue <Link className="text-blue-800 text-xl underline p-1" to="../docs/Catalogue_2024.docx">HERE</Link></p>
                            </div>
                        </div>
                </div>

            </section >

            <hr />

            <div className="text-center mx-auto pt-2 pb-1 my-5 bg-gray-100 max-w-full px-5 ">
                <>
                    {RamSalesLinks.map((link) => (
                    <div 
                    key={link.id} 
                    className="rounded-md border-gray-200 border-2 bg-white px-2 py-1 ring-1 ring-gray-500/10 ring-inset 
                                text-base text-gray-600 title-font mb-2 font-bold 
                                inline-flex items-center mt-1 mr-5">
                        <a href={link.link}>{link.name}</a>
                    </div>
                    ))}
                </>
            </div>


            <div className="mx-auto max-w-screen-xl py-4 px-4 md:px-8">
                <h1 id="animalhealth" className="text-2xl font-medium text-gray-900 title-font mb-2">Animal Health</h1>


                <p className="py-2 leading-relaxed text-gray-800">Our animal health program is something we feel gives us an edge and adds value to our rams.  The main reasons rams fail or don't last as long as they should is because of disease or structural flaws.  We breed our rams so they are structurally sound, disease free but also carry a strong immunity towards many of the common sheep diseases they may face.  It's important that rams are given the best chance to live, last and stay at optimal performance for longer.</p>
                
                <p className="py-2 leading-relaxed text-gray-800">Charollais and White Suffolk rams are strong performing, hard working, long lasting, long living, hardy rams to begin with and our stringent health program only adds to this and adds value for money to our rams while giving our clients peace of mind.</p>
                
                <p className="py-2 leading-relaxed text-gray-800">We are <Link className="text-blue-800 text-lg underline p-1" to="https://agriculture.vic.gov.au/support-and-resources/newsletters/sheep-notes-newsletter/spring-2015/ovine-brucellosis" target="_blank" rel="noreferrer">Brucellosis accredited</Link> which means we are free of Brucellosis.</p>
                
                <p className="py-2 leading-relaxed text-gray-800">All our retained stock and rams have been vaccinated with <Link className="text-blue-800 text-lg underline p-1" to="https://www.zoetis.com.au/product-class/gudair.aspx" target="_blank" rel="noreferrer"> Gudair</Link> since 2005 which protects them from Ovine Johne's Disease and gives them the status of 'Approved Vaccinate'. Sheep vaccinated with Gudair are protected for life. </p>
                
                <p className="py-2 leading-relaxed text-gray-800">Our rams come footrot free and fully vaccinated (2 shots) with <Link className="text-blue-800 text-lg underline p-1" to="https://www.coopersanimalhealth.com.au/products/CoopersOvilisFootvax" target="_blank" rel="noreferrer">Coopers Ovilis Footvax</Link>. This has become a major selling point for us as people who have footrot on their property can purchase our rams knowing they carry immunity and are far less likely to develop the disease and become lame. Sheep develop immunity to Dichelobacter nodosus (footrot causing bacteria) either by exposure or vaccination. If you have foot trouble our rams are ideal for you.</p>
                {/* </div>
                <YoutubeEmbed embedId="V42pF68DjsU" className="w-full lg:w-1/2" />
                </div> */}

                <p className="py-2 leading-relaxed text-gray-800">Our rams are fully vaccinated with <Link className="text-blue-800 text-lg underline p-1" to="https://www.zoetis.com.au/livestock-solutions/sheep/best-practice-videos/glanery.aspx" target="_blank" rel="noreferrer"> GlanEry 7in1</Link> which means they are protected from Cheesy gland (CLA) and Erysipelas arthritis plus the five major Clostridial diseases.  This vaccine helps protect our rams from the main diseases that cause lameness, illness and death in sheep.</p>

                <p className="py-2 leading-relaxed text-gray-800">Our rams have been double vaccinated as lambs with <Link className="text-blue-800 text-lg underline p-1" to="https://www.coopersanimalhealth.com.au/products/BovilisMH" target="_blank" rel="noreferrer"> Bovilis MH</Link> around weaning time.  While not registered in sheep yet, we have done so with the advice of Coopers Animal Health Vet Jim Walsh.  Bovilis MH is known for protecting cattle from the Pneumonia and Pleurisy causing bacteria Mannheimia haemolytica.  In dry and dusty conditions or feedlot conditions, pneumonia can be a real problem for lambs shortly after weaning.  Many lambs which develop an MH infection survive but can be left with the condition Pleurisy which will effect stamina and vigour and hence the performance of a ram for the remainder of their life.  This vaccine helps ensure rams have good stamina and develop really strong immunity to pneumonia without developing pleurisy.  Protecting lambs during their first summer where they are most vulnerable while they are developing immunity to MH naturally provides a life long advantage.</p>

                <p className="py-2 leading-relaxed text-gray-800"><Link className="text-blue-800 text-lg underline p-1" to="https://www.theland.com.au/story/5938584/future-mh-vaccine-for-sheep/">Click here for more information on the use of Bovilis MH in sheep.</Link></p>

                <p className="py-2 leading-relaxed text-gray-800">Unvaccinated means unprotected and unreliable.  A Ram that last more seasons and performs better becomes a cheap ram that has more lambs and makes more money!</p>
                        {/* <YoutubeEmbed className="" embedId="eqGXMMLGz3Q" /> */}
                    {/* </div> */}
              {/* </div> */}

                <h1 id="2023RamHealthDetails" className="text-2xl font-medium text-gray-900 title-font mb-2 mt-5">2023 Ram Health Details</h1>

                <p className="py-2 leading-relaxed text-gray-800"><Link className="text-blue-800 text-lg underline p-1" to="https://agriculture.vic.gov.au/support-and-resources/newsletters/sheep-notes-newsletter/spring-2015/ovine-brucellosis" target="_blank" rel="noreferrer">Brucellosis Accredited</Link> - (number 70)</p>

                <p className="py-2 leading-relaxed text-gray-800"><Link className="text-blue-800 text-lg underline p-1" to="https://www.zoetis.com.au/all-products/portal-site/beef-dairy-sheep/sheep-gudair.aspx" target="_blank" rel="noreferrer">Gudair</Link> - Vaccinated Since 2005</p>

                <p className="py-2 leading-relaxed text-gray-800"><Link className="text-blue-800 text-lg underline p-1" to="https://www.coopersanimalhealth.com.au/product/bovilis-mh/" target="_blank" rel="noreferrer">Bovilis MH</Link> - 31/12/2022 (2nd Dose)</p>

                <p className="py-2 leading-relaxed text-gray-800"><Link className="text-blue-800 text-lg underline p-1" to="https://www.zoetis.com.au/all-products/portal-site/beef-dairy-sheep/sheep-glanery.aspx" target="_blank" rel="noreferrer">GlanEry 7in1</Link> - 16/6/2023 (3rd dose)</p>

                <p className="py-2 leading-relaxed text-gray-800"><Link className="text-blue-800 text-lg underline p-1" to="https://www.coopersanimalhealth.com.au/product/coopersovilisfootvax/" target="_blank" rel="noreferrer">Coopers Ovilis Footvax</Link> - 6/7/2023 (2nd dose)</p>

                <p className="py-2 leading-relaxed text-gray-800"><Link className="text-blue-800 text-lg underline p-1" to="https://au.virbac.com/products/sheep-nutrition/multimin-injection-sheep-copper" target="_blank" rel="noreferrer">Multimin Plus Copper</Link> - 2ml (6-8-23)</p>

                <p className="py-2 leading-relaxed text-gray-800"><Link className="text-blue-800 text-lg underline p-1" to="https://au.virbac.com/tridectin" target="_blank" rel="noreferrer">Tridectin Drench</Link> - (29-8-23)</p>

                <h1 id="AboutOurCharollais" className="text-2xl font-medium text-gray-900 title-font mb-2  mt-5">About our Charollais</h1>

                <p className="py-2 leading-relaxed text-gray-800">We are a registered flock and have been breeding Charollais since 2013. We started out by using pure Charollais genetics over some of our best White Suffolk stud ewes. Since then we have gradually increased the purity of the breed to produce a strong Charollais type while keeping the beneficial traits gained from the White Suffolk such as extra length, frame, size and good feet. </p>

                <p className="py-2 leading-relaxed text-gray-800">We see our sheep as Charollais with improvements. While we do have purebred rams to offer our focus has been on quality and type over purity. Breeding a quality animal that performs and is a strong Charollais type is our primary focus. </p>

                <p className="py-2 leading-relaxed text-gray-800">Charollais produce top quality prime lambs over any breed and at any age. They have developed popularity due to their very low birth weights, hardiness, high multiple births, excellent hybrid vigour and ability to grow out quickly to industry standards. They are the ideal breed to put over maidens, ewe lambs, merinos and shedding breeds. They are also a great option over old ewes who require an easier lambing.</p>

                <p className="py-2 leading-relaxed text-gray-800">Charollais are a French breed and one of the top terminal sires in the UK, Ireland and Europe. They are relatively new to Australia but are quickly growing in popularity here and in New Zealand.The breed exhibits excellent muscling through the hindquarters and loin and produces very high meat yields and dressing out percentage. They are clean on the head, legs and breach and have short tight wool that produces a compact but heavy lamb that stays sappy longer. </p>

                <p className="py-2 leading-relaxed text-gray-800">The breed has excellent eating quality and are ideally sold over the hooks but stand up very well in the sale yards as well. Charollais rams are very fertile, hard working with a great libido and heat tolerance.</p>

                <p className="py-2 leading-relaxed text-gray-800">Run an intensive farm? Don't have time to go around the ewes? Are you done with catching ewes and pulling lambs? Rather be doing something else? Charollais are a low maintenance option. Spend less time going around the ewes, pulling lambs and save/make money by losing less ewes and lambs by using Chaorallais Rams.</p>

                <h1 id="AboutOurWhiteSuffolk" className="text-2xl font-medium text-gray-900 title-font mb-2  mt-5">About our White Suffolk</h1>

                <p className="py-2 leading-relaxed text-gray-800">We are a registered stud and have been breeding White Suffolk sheep since 1989. With our White Suffolks we aim to produce a sheep that is industry leading in its length, size and growth rate while maintaining a good structure for easy lambing and durability. White Suffolks are know for producing prime trade and export lambs with the flexibility to produce premium early finishing sucker lambs or heavy weight lambs later on. They grow fast and keep on growing! Tight wool and clean points produce lambs that stay clean and sappy for longer and have good skin values.</p>

                <p className="py-2 leading-relaxed text-gray-800">White Suffolks rams are hard working with good fertility and libido. They are ideal over first cross ewes and many of our clients are having great success over merinos, maidens and ewe lambs. They are a long living and durable breed which will likely give you many seasons of work so you are likely to get more bang for your buck.</p>

                <p className="py-2 leading-relaxed text-gray-800">Another area White Suffolks are showing promise in is as a Maternal sire to produce commercial ewes and replacement ewes. White Suffolk x Merino ewes are proving to be a profitable option growing in popularity. White Suffolks are excellent milkers and mothers. Their clean points, clean breach and tight wool will produce a hardy and high quality meat orientated cross bread ewe. </p>

                <p className="py-2 leading-relaxed text-gray-800">Our White Suffolk Genetics are sourced from as far as South Australia, New South Wales and all around Victoria from some of the best studs in the country. We aim to keep a high standard within our flock and to produce rams that are at the highest national standard and to keep the breed improving. No effort or cost is spared when it comes to sourcing genetics.</p>

                <p className="py-2 leading-relaxed text-gray-800">When it comes to type there are two clear types getting around with White Suffolk Sheep. Big long upstanding rams and more compact meaty types. We aim to produce both as one size does not fit all. </p>

                <p className="py-2 leading-relaxed text-gray-800">LAMBPLAN has not been our main focus as a stud as we believe visual traits are more important however a more direct focus on EBVS the last few seasons has seen a sharp rise in our stud's figures. Our plan is to continue to increase our figures so that our rams give the buyers some of the best available ASBVs to chose from without regressing in visual traits. Maintaining good birth weights, increasing PWT, EMD and TCP have already been achieved and will continue to increase in our stud</p>

                <h1 id="EBV" className="text-2xl font-medium text-gray-900 title-font mb-2  mt-5">EBVs</h1>

                <p className="py-2 leading-relaxed text-gray-800">We participate in <Link className="text-blue-800 text-lg underline p-1" to="https://www.sheepgenetics.org.au/resources/lambplan/" target="_blank" rel="noreferrer">LAMBPLAN</Link> and ASBV are available.</p>


                <h1 id="StudRegistration" className="text-2xl font-medium text-gray-900 title-font mb-2  mt-5">Stud Registration</h1>

                <p className="py-2 leading-relaxed text-gray-800">Both Studs are registered Studs. </p>

                <p className="py-2 leading-relaxed text-gray-800">Our White Suffolk are registered through the<Link className="text-blue-800 text-lg underline p-1" to="https://www.whitesuffolk.com.au/" target="_blank" rel="noreferrer">Australian White Suffolk Association</Link> (Flock 67).</p>

                <p className="py-2 leading-relaxed text-gray-800">Our Charollais are registered with<Link className="text-blue-800 text-lg underline p-1" to="https://www.assba.com.au/">Australian Stud Sheep Breeders Association</Link> and<Link className="text-blue-800 text-lg underline p-1" to="https://charollaisaustralia.com.au/" target="_blank" rel="noreferrer">Australian Charollais Sheep Association</Link> (Flock 67).</p>
            </div>

                <div className="bg-gray-200 max-w-full px-5 mt-5 mx-auto">
                        <h4 className="text-center text-gray-600 text-xl font-bold pt-2 ">Keep Up To Date by Following us on our Social Media</h4>
                    <div className="flex flex-row items-center justify-center pb-2">
                        {SocialLink && SocialLink.map((item) => (
                            <p key={item.id} className= "flex flex-row align-middle justify-center text-base md:text-lg font-semibold  text-gray-500">
                            <span className="pl-5 pr-1 my-1 mx-auto">{item.icon}</span> 
                                <a href={item.link}>{item.text}</a>
                            </p>
                        ))}
                    </div>
                </div>

            <Footer />
        </>
    )
}

