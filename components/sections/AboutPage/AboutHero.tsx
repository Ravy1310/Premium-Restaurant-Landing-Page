"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !imgRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked continuous parallax on Hero image only
            gsap.fromTo(
                imgRef.current,
                { scale: 1.1, y: -20 },
                {
                    scale: 1.2,
                    y: 40,
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
            className="relative w-full h-[60vh] md:h-[80vh] flex justify-center items-center overflow-hidden"
        >
            <div ref={imgRef} className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/restaurant/Ember%20&%20Oak%20Restaurant%20Interior.jpeg"
                    alt="Ember & Oak Restaurant Interior"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            {/* dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center text-center px-6"
            >
                <span className="text-secondary text-sm md:text-base font-semibold font-inter uppercase tracking-[4.20px] mb-4">
                    Established 2026
                </span>
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight max-w-[890px] mb-6">
                    A Legacy Of Culinary Excellence
                </h1>
                <div className="w-24 h-px bg-secondary mb-6" />
                <p className="text-white/80 text-lg font-normal font-inter leading-8 max-w-[600px]">
                    Where the ancient art of wood-fire cooking meets contemporary culinary precision.
                </p>
            </motion.div>
        </section>
    );
}