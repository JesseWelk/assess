import React from "react";

const Subscribe = () => {
    return (
        <section className="text-gray-500 body-font bg-[#FBFFF4]">
            <div className="container px-2 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign up for info on OddBall</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Keep up to date with any news or promotions from the OddBall team.</p>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label className="leading-7 text-sm text-gray-500">Full Name</label>
                        <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-400 focus:bg-transparent focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="relative flex-grow w-full">
                        <label className="leading-7 text-sm text-gray-500">Email</label>
                        <input type="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-400 focus:bg-transparent focus:ring-2 focus:ring-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="flex w-2/3 w-full mx-auto sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <button className="flex-1 justify-center text-white bg-[#FC9F5B] border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-md">Sign up</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;