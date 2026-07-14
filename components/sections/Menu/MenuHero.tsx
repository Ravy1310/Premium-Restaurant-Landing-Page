"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MenuHero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(heroRef.current, {
                y: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <motion.section
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[1280px] px-6 md:px-12 lg:px-20 pt-24 pb-16 flex flex-col items-center gap-6 text-center"
        >
            <span className="text-secondary text-xs md:text-sm font-semibold tracking-[0.35em] uppercase">
                ARTISANAL GASTRONOMY
            </span>
            <h1 className="text-primary text-5xl md:text-6xl font-bold font-playfair leading-tight">
                Our Menu
            </h1>
            <p className="text-body text-base md:text-lg font-normal font-inter max-w-[672px] leading-relaxed">
                A celebration of seasonal ingredients, masterfully crafted into dishes that warm the soul and delight the senses. Experience the culinary artistry of Ember &amp; Oak.
            </p>
        </motion.section>
    );
}
