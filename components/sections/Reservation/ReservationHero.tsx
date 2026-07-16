"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

export default function ReservationHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !imgRef.current || !contentRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked continuous background parallax
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

            // Scroll-linked text fade and lift storytelling effect
            gsap.to(contentRef.current, {
                y: 55,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "65% top",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[65vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-stone-900"
        >
            <div ref={imgRef} className="absolute inset-0 w-full h-full">
                <Image
                    src={encodeURI("/images/restaurant/Ember & Oak Restaurant Interior.jpeg")}
                    alt="Ember and Oak Reservation Interior"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-stone-50" />

            <motion.div
                ref={contentRef}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-6 max-w-2xl -mt-10 flex flex-col items-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-secondary/40 text-secondary text-xs md:text-sm font-semibold font-inter uppercase tracking-[3px] mb-5 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>FINE DINING EXPERIENCE</span>
                </div>
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6 leading-tight">
                    Secure Your Table
                </h1>
                <div className="w-24 h-px bg-secondary mx-auto mb-6" />
                <p className="text-white/85 text-lg font-normal font-inter leading-8">
                    Join us for an evening of culinary artistry. Each reservation is a promise of a tailored gastronomic journey at Ember & Oak.
                </p>
            </motion.div>
        </section>
    );
}