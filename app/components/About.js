"use client"
import { assets, infoList } from '@/assets/assets'
import Image from "next/image";
import React from 'react'
import { motion } from "framer-motion"
import AvatarCanvas from './AvatarCanvas'

const About = ({ isDarkMode }) => {
    return (
        <motion.section
            id="about"
            className="w-full px-6 sm:px-12 lg:px-[12%] py-16 scroll-mt-28 md:scroll-mt-20 lg:scroll-mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Headings */}
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl md:text-5xl font-Outfit font-bold text-gray-900 dark:text-white mt-20 sm:mt-32 mb-12"
                >
                    About Me
                </motion.h2>
            </div>

            {/* Avatar and Description */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24"
            >
                {/* Text Area */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 w-full max-w-2xl"
                >
                    <p className="mb-10 font-Ovo text-gray-700 dark:text-white/80 leading-relaxed">
                        I'm Harsh Jaiswal, a passionate and creative frontend developer who loves building smooth,
                        responsive, and visually striking experiences. Whether it’s designing clean UI or adding subtle
                        animations, I thrive on bringing ideas to life in the browser and mobile.
                        <br /><br />
                        I specialize in React, Next.js, Tailwind, React Native, and animation libraries.
                        I value clean code, thoughtful design, and performance. I'm currently expanding my skills by learning backend development and 3D development to master full-stack development with AI integration.
                        <br /><br />
                        Fueled by curiosity, creativity — and a lot of coffee ☕ — I’m always striving to grow and experiment with new ideas.
                        I’m open to frontend or full-stack opportunities where I can contribute to meaningful, innovative products and collaborate with like-minded teams.
                    </p>

                    {/* Highlights Grid */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                    >
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='border-[0.5px] border-gray-400 rounded-xl py-2 px-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                key={index}
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Interests Section */}
                    <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
                        <p className="italic font-Ovo">Outside of coding, you’ll often find me:</p>
                        <ul className="flex flex-wrap justify-center gap-3 mt-3 text-sm">
                            <li className="bg-gray-100 dark:bg-darkHover px-3 py-1 rounded-full font-Ovo">🏋️‍♂️ Going to the gym</li>
                            <li className="bg-gray-100 dark:bg-darkHover px-3 py-1 rounded-full font-Ovo">🎮 Playing computer games and 🏏 sports</li>
                            <li className="bg-gray-100 dark:bg-darkHover px-3 py-1 rounded-full font-Ovo">🌍 Travelling</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Avatar */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center items-center w-full lg:w-[40%] min-h-[400px] -mt-16"
                    suppressHydrationWarning
                >
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm -mt-10">
                        <AvatarCanvas />
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default About
