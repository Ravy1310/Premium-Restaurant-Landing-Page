"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TestiHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !imgRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked continuous parallax on Hero background image
            gsap.fromTo(
                imgRef.current,
                { scale: 1.1, y: -20 },
                {
                    scale: 1.2,
                    y: 60,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[65vh] md:h-[75vh] flex justify-center items-center overflow-hidden"
        >
            <div ref={imgRef} className="absolute inset-0 w-full h-full">
                <Image
                    src={encodeURI("/images/restaurant/Ember & Oak Restaurant Interior.jpeg")}
                    alt="Ember and Oak Atmosphere"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-black/55" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center text-center px-6 max-w-[760px]"
            >
                <span className="text-secondary text-sm md:text-base font-semibold font-inter uppercase tracking-[4.20px] mb-4">
                    AUTHENTIC STORIES
                </span>
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight mb-6">
                    Voices of Ember & Oak
                </h1>
                <div className="w-24 h-px bg-secondary mb-6" />
                <p className="text-white/80 text-lg font-normal font-inter leading-8">
                    "A culinary sanctuary where every plate tells a story of craftsmanship, and every guest becomes part of our enduring heritage."
                </p>
            </motion.div>
        </section>
    );
}