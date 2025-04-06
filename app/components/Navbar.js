'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {/* Decorative header background image (only light mode) */}
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="header background" className='w-full' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className='w-28 cursor-pointer mr-14' />
                </a>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#resume">Resume</a></li>
                    <li><a className='font-Ovo' href="#projects">My Work</a></li>
                    <li><a className='font-Ovo' href="#blog">Blogs</a></li>
                </ul>

                {/* Right section */}
                <div className='flex items-center gap-4'>

                    {/* Dark mode toggle */}
                    <button onClick={() => setIsDarkMode(prev => !prev)} aria-label="Toggle theme">
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle theme icon" className='w-6' />
                    </button>

                    {/* Contact CTA */}
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                        Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow icon" className='w-3' />
                    </a>

                    {/* Mobile menu button */}
                    <button className='block md:hidden ml-3' onClick={() => setIsMenuOpen(true)} aria-label="Open mobile menu">
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Open menu" className='w-6' />
                    </button>
                </div>

                {/* Mobile Side Menu */}
                <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-500 bg-rose-50 dark:bg-darkHover dark:text-white ${isMenuOpen ? 'right-0' : '-right-64'}`}>

                    <div className='absolute right-6 top-6 cursor-pointer' onClick={() => setIsMenuOpen(false)}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close menu" className='w-5' />
                    </div>

                    <li><a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#about">About me</a></li>
                    <li><a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#resume">Resume</a></li>
                    <li><a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#projects">My Work</a></li>
                    <li><a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#blog">Blog</a></li>
                    <li><a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
