import React from "react";

const Footer = () => {
    return (
        <footer className="text-black-200 body-font bg-[#FBFFF4]">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="/../images/Oddball.png" width={200} height={200} className="bg-[#FBFFF4] rounded-xl pt-3 pl-2 mr-3"></img>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-orange-400 sm:py-2 sm:mt-0 mt-4">© 2024 Jesse Welk
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-black-200" href="https://github.com/jillnguyen2311/NBATracker-final-project-MDIA3109">
                       OddBall Github
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;