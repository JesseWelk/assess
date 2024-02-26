import React from "react";

const Header = () => {
    return (
        <header className="text-black body-font bg-[#FC9F5B]">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <img src={"../../static/img/Oddball.png"} alt="logo" className="bg-[#FBFFF4] rounded-xl pt-3 pl-2 pr-2 mr-3 w-40"></img>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center md:pt-0 pt-5">
                    <a className="mr-5 hover:text-emerald-600 pl-5 text-xl drop-shadow bg-[#FC9F5B] pr-3 rounded-xl">Live Games</a>
                    <a className="mr-5 hover:text-emerald-600 text-xl drop-shadow bg-[#FC9F5B] pr-3 rounded-xl pl-5">Our Mission</a>
                    <a className="mr-5 hover:text-emerald-600 text-xl drop-shadow bg-[#FC9F5B] pl-3 pr-3 rounded-xl max-[472px]:mt-3 max-[472px]:ml-4">About Us</a>
                </nav>
                <button className="inline-flex items-center bg-[#FBFFF4] border-0 py-1 px-3 mr-1 drop-shadow focus:outline-none hover:bg-emerald-600 rounded text-base mt-4 md:mt-0">Sign Up
                </button>
            </div>
        </header>
    )
}

export default Header;