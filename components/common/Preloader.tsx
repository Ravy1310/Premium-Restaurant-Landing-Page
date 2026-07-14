"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("ember_oak_first_load");
        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        let start = 0;
        const interval = setInterval(() => {
            start += Math.floor(Math.random() * 8) + 4;
            if (start >= 100) {
                start = 100;
                setProgress(100);
                clearInterval(interval);
                sessionStorage.setItem("ember_oak_first_load", "true");
                setTimeout(() => {
                    setIsLoading(false);
                }, 450);
            } else {
                setProgress(start);
            }
        }, 45);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
                    }}
                    className="fixed inset-0 z-[100] bg-stone-950 text-stone-100 flex flex-col justify-between p-8 md:p-14 overflow-hidden"
                >
                    {/* Top Bar */}
                    <div className="flex justify-between items-center text-xs tracking-[0.25em] uppercase text-stone-400 font-inter">
                        <span>Ember &amp; Oak</span>
                        <span>Fine Dining</span>
                    </div>

                    {/* Center Brand Storytelling */}
                    <div className="flex flex-col items-center justify-center gap-4 my-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-secondary text-xs md:text-sm font-semibold tracking-[0.4em] uppercase"
                        >
                            EST. 2026
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl md:text-7xl lg:text-8xl font-playfair font-bold tracking-tight text-center bg-gradient-to-r from-stone-100 via-secondary to-stone-100 bg-clip-text text-transparent"
                        >
                            EMBER &amp; OAK
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-stone-400 text-xs md:text-sm tracking-[0.25em] uppercase font-inter mt-2"
                        >
                            Crafting Culinary Excellence
                        </motion.p>
                    </div>

                    {/* Bottom Progress Counter & Bar */}
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex justify-between items-end">
                            <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-inter">
                                Loading Experience
                            </span>
                            <span className="text-3xl md:text-5xl font-playfair font-semibold text-secondary">
                                {progress}%
                            </span>
                        </div>
                        <div className="w-full h-[2px] bg-stone-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "easeOut", duration: 0.1 }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
