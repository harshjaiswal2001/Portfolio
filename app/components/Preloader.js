"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets"; // your logo/profile path

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 6000); // adjust as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-screen z-[9999] bg-white dark:bg-black flex items-center justify-center flex-col"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Animated Logo or Profile Image */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    >
                        <Image
                            src={assets.profile_img} // use your animated profile or logo here
                            alt="loading"
                            width={100}
                            height={100}
                            className="rounded-full shadow-lg"
                        />
                    </motion.div>

                    {/* Loading Text */}
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-xl sm:text-2xl font-semibold mt-6 text-gray-700 dark:text-white font-Outfit"
                    >
                        Warming up the code ☕
                    </motion.h2>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
