"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !imageRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(imageRef.current, {
                y: 40,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative w-full min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1280px]">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Bagian Teks (Kiri) */}
                    <motion.div
                        className="w-full md:w-1/2 flex flex-col justify-start items-start gap-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="text-heading text-5xl md:text-6xl font-bold font-playfair leading-[1.2] md:leading-[70.40px]">
                                Experience Fine<br className="hidden md:block" />
                                Dining Like<br className="hidden md:block" />
                                Never Before
                            </h1>
                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-body text-lg font-normal font-inter leading-8 max-w-[480px]">
                                Crafted with passion. Served with elegance. A modern culinary journey rooted in classic techniques.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 w-full">
                            <Link
                                href="#reservation"
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-button shadow-button hover:bg-primary/90 transition-all flex justify-center items-center text-base font-semibold font-inter"
                            >
                                Reserve Table
                            </Link>
                            <Link
                                href="#menu"
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-button transition-all flex justify-center items-center text-base font-semibold font-inter"
                            >
                                View Menu
                            </Link>
                        </div>
                    </motion.div>

                    {/* Bagian Gambar (Kanan) */}
                    <motion.div
                        ref={imageRef}
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-[536px] aspect-[4/5] rounded-image overflow-hidden shadow-card">
                            <Image
                                src="/images/hero/Coffee Cookies.jpeg"
                                alt="Ember & Oak Signature Dish"
                                fill
                                priority
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-6 h-6 text-primary/60" />
                </motion.div>
                <span className="text-[10px] text-primary/60 font-inter uppercase tracking-[0.2em]">
                    Scroll to Explore
                </span>
            </motion.div>
        </section>
    );
}
