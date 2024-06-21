import Logo from "../assets/images/logo-with-text.png";
import { RiMenu3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { NavigationItems } from './NavigationItems'
import ButtonGDSC from "./ButtonGDSC";

const Navbar = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const [isNavbarFixed, setNavbarFixed] = useState(false);

    const toggleNavVisibility = () => {
        setNavVisible(!isNavVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            const fixedNav = document.querySelector('header').offsetTop;
            if (window.pageYOffset > fixedNav) {
                setNavbarFixed(true);
            } else {
                setNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Bersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-50 ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
            <div className="container 2xl:px-[7%] py-4 lg:py-0">
                <div className="flex items-center justify-between relative">
                    <img src={Logo} alt="logo" className="h-8" />
                    <div className="flex items-centr">
                        <button id="mobile-nav" className="block absolute top-1/2 -translate-y-1/2 right-4 lg:hidden" onClick={toggleNavVisibility}>
                            <RiMenu3Fill size={25} className="text-low-black" />
                        </button>
                        <nav id="nav-menu"
                            className={`${isNavVisible ? '' : 'hidden'} lg:block lg:static lg:bg-transparent max-w-full lg:shadow-none lg:rounded-none absolute py-5 shadow-lg rounded-lg w-full top-full left-0 bg-white border border-gray-300 lg:border-none`}
                        >
                            <ul className="block lg:flex gap-x-8">
                                {NavigationItems && Array.isArray(NavigationItems) && NavigationItems.map((item) => (
                                    <a key={item.name}>
                                        <li className={`${item.name == 'Home' ? 'text-blue' : 'text-low-black'} text-sm font-medium py-2 px-8 lg:px-0 hover:-translate-y-3 duration-300 cursor-pointer`}>
                                            {item.name}
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="hidden lg:flex items-center justify-center gap-x-2">
                        <form className="relative">
                            <input type="search" id="default-search" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        </form>

                        <ButtonGDSC fontSize='sm' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
