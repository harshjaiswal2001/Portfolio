"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const titles = [
    "Frontend Developer",
    "Freelancer",
    "UI/UX Designer",
    "Fullstack Developer",
];

const Header = () => {
    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
         <div className="w-11/12 max-w-4xl mx-auto min-h-[100dvh] flex flex-col items-center justify-center text-center gap-6 px-4 pt-24 sm:pt-32 lg:pt-20 xl:pt-16 2xl:pt-10">
            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
                className="relative"
            >
                <Image
                    priority
                    src={assets.profile_img}
                    alt="Profile"
                    className="rounded-full max-w-full w-32 sm:w-40 md:w-48 border-4 border-gray-300 shadow-lg transform hover:scale-105 transition-all duration-300"
                />
            </motion.div>

            {/* Name and Hand Icon */}
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center text-2xl md:text-3xl font-semibold gap-2 text-gray-900 dark:text-gray-100"
            >
                Hi! I'm <span className="text-primary font-bold">Harsh Jaiswal</span>
                <motion.div
                    initial={{ rotate: -15 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.5, repeat: 3, repeatType: "reverse" }}
                    className="inline-block"
                    role="img"
                    aria-label="waving hand"
                >
                    <Image src={assets.hand_icon} alt="Waving hand emoji" width={32} height={32} className="w-7 md:w-8" />
                </motion.div>
            </motion.h3>

            {/* Animated Role Title */}
            <AnimatePresence mode="wait">
                <motion.h1
                    key={titles[currentTitle]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100"
                >
                    {titles[currentTitle]}
                </motion.h1>
            </AnimatePresence>

            {/* Short Description */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-Ovo text-lg text-gray-700 dark:text-gray-300 cursor-pointer max-w-2xl"
            >
                🚀 I build intuitive, performant, and visually engaging digital experiences. Whether it's crafting beautiful interfaces, architecting robust applications, or bringing client ideas to life—I combine design thinking and development skills to deliver impactful solutions.
                <span className="font-Ovo italic text-gray-600 dark:text-gray-400 block mt-2">
                    Let's bring your vision to life with creativity and code!
                </span>
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                {/* Contact Me Button */}
                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    href="#contact"
                    className="font-Outfit px-8 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md flex items-center gap-2"
                >
                    Contact Me
                    <Image src={assets.right_arrow_white} alt="➡" className="w-4" />
                </motion.a>

                {/* Resume Button */}
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/Harsh_resume_sde.pdf"
                    download
                    className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
                >
                    my resume
                    <Image src={assets.download_icon} alt="" className="w-4" />
                </motion.a>
            </div>
        </div>
    );
};

export default Header;
