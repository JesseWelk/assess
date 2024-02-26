import React from "react";

const Price = () => {
    return (
        <section className="text-gray-500 body-font overflow-hidden bg-[#FBFFF4]">
            <div className="container py-12 mx-auto justify-center">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">See the plans we offer.</p>
                </div>
                <div className="flex flex-wrap m-4 justify-center">
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-emerald-600 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">CASUAL</h2>
                            <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-emerald-600 leading-none">Free</h1>
                            <p className="flex items-center text-gray-500 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>View live game scores
                            </p>
                            <p className="flex items-center text-gray-500 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Follow season standings
                            </p>
                            <p className="flex items-center text-gray-500 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Keep up with current news
                            </p>
                            <button className="flex items-center mt-auto text-white bg-emerald-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Select
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" className="w-4 h-4 ml-auto" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-orange-400 flex flex-col relative overflow-hidden">
                            <span className="bg-orange-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-orange-400">
                                <span>$12</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="flex items-center text-gray-500 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>View live game scores
                            </p>
                            <p className="flex items-center text-gray-500 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Follow season standings
                            </p>
                            <p className="flex items-center text-gray-500 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Keep up with current news
                            </p>
                            <p className="flex items-center text-gray-500 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Get advanced odd predictions
                            </p>
                            <button className="flex items-center mt-auto text-white bg-orange-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Select
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" className="w-4 h-4 ml-auto" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-emerald-600 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">SUPER FAN</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>$22</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="flex items-center text-gray-500 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>View live game scores
                            </p>
                            <p className="flex items-center text-gray-500 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Follow season standings
                            </p>
                            <p className="flex items-center text-gray-500 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Keep up with current news
                            </p>
                            <p className="flex items-center text-gray-500 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Get advanced odd predictions
                            </p>
                            <p className="flex items-center text-gray-500 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Access to fantasy-pro reccomendations
                            </p>
                            <button className="flex items-center mt-auto text-white bg-emerald-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Select
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" className="w-4 h-4 ml-auto" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Price;