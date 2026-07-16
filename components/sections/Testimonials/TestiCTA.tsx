"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TestiCTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !bgRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked background parallax on CTA section
            gsap.fromTo(
                bgRef.current,
                { scale: 1.1, y: -30 },
                {
                    scale: 1.18,
                    y: 30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
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
            className="relative w-full py-32 px-6 flex justify-center items-center overflow-hidden bg-stone-900"
        >
            <div ref={bgRef} className="absolute inset-0 w-full h-full">
                <Image
                    src={encodeURI("/images/hero/interior.jpeg")}
                    alt="Background Interior"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-20"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/80" />

            <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 flex flex-col items-center text-center max-w-[800px] gap-6"
            >
                <span className="text-secondary text-sm font-semibold font-inter uppercase tracking-[4px]">
                    YOUR SEAT AWAITS
                </span>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
                    Create Your Own Memory
                </h2>
                <p className="text-white/80 text-lg font-inter leading-8 mb-4 max-w-2xl">
                    Whether it's an intimate romantic dinner or a grand celebratory gathering, experience the warm hospitality and culinary artistry of Ember & Oak.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                        href="/#reservation"
                        className="px-10 py-5 bg-primary text-white rounded-full text-base font-semibold font-inter hover:bg-primary/90 transition-all shadow-button hover:scale-105"
                    >
                        Book Your Table
                    </Link>
                    <Link
                        href="/#contact"
                        className="px-10 py-5 bg-transparent text-white rounded-full border-2 border-white/60 text-base font-semibold font-inter hover:bg-white hover:text-stone-900 transition-all hover:scale-105"
                    >
                        Share Your Story
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}