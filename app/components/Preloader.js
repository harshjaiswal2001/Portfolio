// components/Preloader.tsx
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onFinish }: { onFinish: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinish, 600); // delay before transition
                    return 100;
                }
                return prev + 5;
            });
        }, 80); // adjust speed here
        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: progress === 100 ? 0 : 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            {/* Typing Text */}
            <motion.h1
                className="text-2xl md:text-3xl font-mono mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Loading the Dev Portfolio<span className="animate-pulse">...</span>
            </motion.h1>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-indigo-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: 'linear' }}
                />
            </div>

            {/* Optional: Add Avatar below if needed */}
            {/*
      <Canvas>
        <Suspense fallback={null}>
          <YourLoaderAvatar />
        </Suspense>
      </Canvas>
      */}
        </motion.div>
    );
}
