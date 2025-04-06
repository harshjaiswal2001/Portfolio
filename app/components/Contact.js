"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion"

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "1d812d75-907b-461b-9814-1f86ee677f5a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully!");
            event.target.reset();
        } else {
            setResult(data.message);
        }
    };

    return (
        <motion.div
            id='contact'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full px-[8%] py-20 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
        >


            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl text-gray-800 font-bold font-Outfit -top-2'
            >
                Get in touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            >
                I’d love to hear from you — whether you have a question, a project in mind, or just want to say hi, feel free to reach out. I’m always open to exciting collaborations, freelance work, or just a good tech chat.
            </motion.p>

            <div className='flex flex-col md:flex-row gap-12 items-start'>
                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    onSubmit={onSubmit}
                    className='md:w-3/5 w-full bg-white/30 dark:bg-darkHover/30 backdrop-blur-lg p-8 rounded-xl shadow-lg'
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className='p-3 border border-gray-400 rounded-md bg-white dark:bg-darkHover/20 dark:border-white/80'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className='p-3 border border-gray-400 rounded-md bg-white dark:bg-darkHover/20 dark:border-white/80'
                        />
                    </div>

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                        className='w-full p-4 border border-gray-400 rounded-md bg-white dark:bg-darkHover/20 dark:border-white/80 mb-6'
                    ></textarea>

                    <div className='flex justify-center'>
                        <button
                            type='submit'
                            className='py-3 px-8 bg-black text-white rounded-full hover:bg-gray-900 transition dark:bg-white dark:text-black dark:hover:bg-gray-200'
                        >
                            Submit now
                            <Image src={assets.right_arrow_white} alt='arrow' className='w-4 ml-2 inline-block dark:invert' />
                        </button>
                    </div>

                    <p className='text-center mt-4'>{result}</p>
                </motion.form>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className='md:w-2/5 w-full'
                >
                    <div className='w-full p-6 bg-white/40 dark:bg-darkHover/30 backdrop-blur-lg rounded-xl shadow-md flex flex-col items-center justify-center space-y-6 border border-gray-200 dark:border-white/20'>
                        <h3 className='text-lg font-semibold text-center text-gray-800 dark:text-white'>
                            Reach out via social
                        </h3>
                        <div className='flex items-center justify-center gap-6'>
                            <a href='https://www.linkedin.com/in/harshjaiswal2001/' target='_blank' rel='noopener noreferrer'>
                                <Image src={assets.linkedin_icon} alt='LinkedIn' className='w-8 hover:scale-110 transition-transform duration-300' />
                            </a>
                            <a href='https://github.com/harshjaiswal2001' target='_blank' rel='noopener noreferrer'>
                                <Image src={assets.github_icon} alt='GitHub' className='w-8 hover:scale-110 transition-transform duration-300' />
                            </a>
                            <a href='mailto:harshjaiswal857@gmail.com'>
                                <Image src={assets.email_icon} alt='Email' className='w-8 hover:scale-110 transition-transform duration-300' />
                            </a>
                            <a href='https://x.com/harsh_hj17' target='_blank' rel='noopener noreferrer'>
                                <Image src={assets.twitter_icon} alt='Twitter' className='w-8 hover:scale-110 transition-transform duration-300' />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
