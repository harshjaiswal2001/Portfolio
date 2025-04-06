'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    technicalSkills,
    professionalSkills,
    educationData,
    experienceData,
    toolsData,
} from '@/assets/assets';

// Animation variant
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: custom },
    }),
};

const Resume = ({isDarkMode}) => {
    return (
        <section
            id="resume"
            className="py-20 px-6 md:px-12 lg:px-[12%]
    scroll-mt-32
    bg-[url('/footer-bg-color.png')] dark:bg-none
    bg-no-repeat bg-center bg-[length:90%_auto]"
        >

        {/* Resume Heading */}
            <motion.h2
                className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16 font-Outfit"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.1}
            >
                My Resume
            </motion.h2>

            {/* Experience & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                {/* Experience */}
                <div>
                    <h3 className="text-2xl font-Outfit font-semibold mb-6 text-gray-800 dark:text-white">
                        Experience
                    </h3>
                    <div className="relative border-l-2 border-blue-500 dark:border-indigo-400 pl-8 space-y-8">
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={index * 0.2}
                                className="relative hover:scale-[1.02] transition-transform duration-300 hover:shadow-md"
                            >
                                <div className="absolute -left-[9px] top-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 shadow-md"></div>
                                <h4 className="text-lg font-Ovo font-semibold text-blue-500">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {item.company} • {item.duration}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white font-Outfit">
                        Education
                    </h3>
                    <div className="relative border-l-2 border-blue-500 dark:border-indigo-400 pl-8 space-y-8">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={index * 0.2}
                                className="relative hover:scale-[1.02] transition-transform duration-300 hover:shadow-md"
                            >
                                <div className="absolute -left-[9px] top-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 shadow-md"></div>
                                <h4 className="text-lg font-semibold text-blue-500">
                                    {item.degree}
                                </h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {item.institution} • {item.duration}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.2}
            >
                {/* Technical Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                        Technical Skills
                    </h3>
                    <div className="space-y-6">
                        {technicalSkills.map((skill, index) => (
                            <motion.div key={index} variants={fadeInUp} custom={index * 0.1}>
                                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Professional Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                        Professional Skills
                    </h3>
                    <div className="space-y-6">
                        {professionalSkills.map((skill, index) => (
                            <motion.div key={index} variants={fadeInUp} custom={index * 0.1}>
                                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
                className="mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={1.5}
            >
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Tools I Use
                </h4>


                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {toolsData.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                            whileHover={{ scale: 1.07, rotate: 1 }}
                            className="bg-white dark:bg-gray-800 px-2 py-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
                        >
                            <Image src={tool} alt={'tools'} width={40} height={40} className="mb-2" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{tool.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Resume;
