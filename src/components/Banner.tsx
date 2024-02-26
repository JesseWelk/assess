import React from "react";

const Banner = () => {
    return (
        <section className="text-gray-500 body-font bg-[#FBFFF4]">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-black mb-4">Stay informed with OddBall</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Some of the features that makes Oddball the best place for Basketball fans.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-orange-400 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap max-[767px]:justify-center min -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-400 mb-5 flex-shrink-0">
                            
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-black text-lg title-font font-medium mb-3">Don't miss a thing</h2>
                            <p className="leading-relaxed text-base max-w-sm">Jump into live games with ease. Oddball tracks what's happening up to the very second. Never miss game or player scores with Oddball</p>
                            <a className="mt-3 text-orange-400 inline-flex items-center">Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-400 mb-5 flex-shrink-0">
                            
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-black text-lg title-font font-medium mb-3">Follow your favorties</h2>
                            <p className="leading-relaxed text-base max-w-sm">Have a favortie player? track their box scores and their season progress as you watch the game. </p>
                            <a className="mt-3 text-orange-400 inline-flex items-center">Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-400 mb-5 flex-shrink-0">
                            
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-black text-lg title-font font-medium mb-3">Make the right call</h2>
                            <p className="leading-relaxed text-base max-w-sm">Our vast database of odds predictions will provide you the infromation you need. Have confidence in your picks with OddBalls live game and player predictions.</p>
                            <a className="mt-3 text-orange-400 inline-flex items-center">Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;