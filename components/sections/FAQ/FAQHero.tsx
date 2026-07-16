"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FAQHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !imgRef.current) return;

        const ctx = gsap.context(() => {
            // Continuous scroll parallax on FAQ background image
            gsap.fromTo(
                imgRef.current,
                { scale: 1.1, y: -20 },
                {
                    scale: 1.25,
                    y: 65,
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
            className="relative w-full h-[60vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-stone-900"
        >
            <div ref={imgRef} className="absolute inset-0 w-full h-full">
                <Image
                    src={encodeURI("/images/restaurant/Ember and Oak Atmosphere.jpeg")}
                    alt="Ember and Oak FAQ Atmosphere"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/70" />

            <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-6 max-w-[760px]"
            >
                <span className="text-secondary text-sm md:text-base font-semibold font-inter uppercase tracking-[4.20px] mb-4 block">
                    INQUIRIES & GUIDELINES
                </span>
                <h1 className="text-white text-5xl md:text-6xl font-bold font-playfair mb-6 leading-tight">
                    Frequently Asked Questions
                </h1>
                <div className="w-24 h-px bg-secondary mx-auto mb-6" />
                <p className="text-white/85 text-lg font-normal font-inter leading-8">
                    Everything you need to know about your dining experience, private reservations, and culinary journey at Ember & Oak.
                </p>
            </motion.div>
        </section>
    );
}