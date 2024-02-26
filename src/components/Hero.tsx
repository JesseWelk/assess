import React from "react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
    return (
        <section className="text-black body-font bg-[#FBFFF4]">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">OddBall
                    </h1>
                    <h3 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">The one stop of all things NBA.
                    </h3>
                    <p className="mb-8 leading-relaxed max-w-3xl text-gray-500">The number one spot to keep up to date on everything NBA. Oddball provides information on all things ball, sharing current odds on games and players, as well as current season standings and live games.</p>
                    <p className="mb-8 leading-relaxed underline font-bold">Join our mailing list for future news and updates</p>

                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-[#FC9F5B] border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Sign up</button>
                    </div>
                </div>
                <div className="w-100 h-100">
                <Spline scene="https://prod.spline.design/9cM1XeydgAHIqP72/scene.splinecode" />
                </div>
            </div>
        </section>
    )
}

export default Hero;