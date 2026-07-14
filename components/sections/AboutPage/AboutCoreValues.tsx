"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Sparkles, Leaf, Utensils } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutCoreValues() {
    const sectionRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !imgRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                imgRef.current,
                { scale: 1.15, y: -15 },
                {
                    scale: 1,
                    y: 15,
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
            className="w-full max-w-[1280px] px-6 md:px-12 lg:px-20 py-28 flex flex-col items-center gap-16 mx-auto"
        >
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-center flex flex-col gap-4"
            >
                <h2 className="text-primary text-4xl md:text-5xl font-bold font-playfair">Our Core Values</h2>
                <p className="text-body text-lg font-inter max-w-[672px]">
                    The pillars that define the Ember & Oak experience.
                </p>
            </motion.div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="bg-secondary/20 p-8 rounded-card flex flex-col justify-center items-center text-center gap-4 hover:shadow-card transition-shadow"
                >
                    <Sparkles className="w-12 h-12 text-primary" />
                    <h4 className="text-primary text-xl font-semibold font-inter">Precision Craft</h4>
                    <p className="text-body text-base font-inter">Every dish is a calculated masterpiece of heat and timing.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.12 }}
                    className="bg-primary p-8 rounded-card flex flex-col justify-end items-start gap-2 hover:shadow-card transition-shadow"
                >
                    <Flame className="w-8 h-8 text-white mb-2" />
                    <h4 className="text-white text-xl font-semibold font-inter">Authentic Heritage</h4>
                    <p className="text-white/70 text-base font-inter">Preserving the timeless rituals of the wood-fired hearth.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.24 }}
                    className="bg-stone-200 p-8 rounded-card flex flex-col justify-end items-start gap-2 hover:shadow-card transition-shadow"
                >
                    <Utensils className="w-8 h-8 text-primary mb-2" />
                    <h4 className="text-primary text-xl font-semibold font-inter">Refined Service</h4>
                    <p className="text-body text-base font-inter">Michelin-star attention with the warmth of a mountain lodge.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.36 }}
                    className="lg:col-span-2 relative bg-stone-200 p-8 rounded-card flex flex-col justify-end items-start gap-2 overflow-hidden hover:shadow-card transition-shadow group"
                >
                    <Image
                        ref={imgRef}
                        src="/images/restaurant/Sustainable%20Sourcing.jpeg"
                        alt="Sustainable Sourcing"
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="relative z-10">
                        <Leaf className="w-8 h-8 text-primary mb-2" />
                        <h4 className="text-primary text-xl font-semibold font-inter">Sustainable Sourcing</h4>
                        <p className="text-body text-base font-inter max-w-md">Partnering with local farmers who share our commitment to the earth.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}