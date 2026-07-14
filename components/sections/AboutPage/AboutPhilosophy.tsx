"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutPhilosophy() {
    const sectionRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !imgRef.current || !quoteRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked continuous parallax on chef image
            gsap.fromTo(
                imgRef.current,
                { scale: 1.15, y: -20 },
                {
                    scale: 1,
                    y: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            // Floating quote card scroll-linked shift
            gsap.fromTo(
                quoteRef.current,
                { y: 35 },
                {
                    y: -35,
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
            className="w-full max-w-[1280px] px-6 md:px-12 lg:px-20 py-28 flex flex-col lg:flex-row items-center gap-16 mx-auto"
        >
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex flex-col gap-8"
            >
                <h2 className="text-primary text-4xl md:text-5xl font-bold font-playfair leading-tight">
                    Our Philosophy
                </h2>
                <div className="flex flex-col gap-6 text-body text-lg font-inter leading-relaxed">
                    <p>
                        At Ember & Oak, we believe that the finest flavors are born from simplicity and respect for the
                        ingredient. Our journey began with a single vision: to create a sanctuary where the elemental power of
                        fire transforms the world's most exceptional local produce into works of edible art.
                    </p>
                    <p>
                        Every log of oak we burn is hand-selected, every grain of salt is sourced with intent, and every cut of
                        meat is aged to perfection in our custom dry-aging chambers. This is more than dining; it is a
                        celebration of craftsmanship that honors the land and the tradition of the hearth.
                    </p>
                </div>

                <div className="flex items-center gap-6 mt-4">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex justify-center items-center">
                        <ChefHat className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-heading text-xl font-semibold font-inter">Chef Julian Thorne</span>
                        <span className="text-body text-sm font-semibold font-inter uppercase tracking-wide">
                            Executive Chef & Founder
                        </span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex-1 relative w-full flex justify-center lg:justify-end"
            >
                <div className="relative w-full max-w-[548px] h-[500px] md:h-[685px] rounded-image shadow-2xl overflow-hidden">
                    <Image
                        ref={imgRef}
                        src="/images/restaurant/Chef%20Julian%20Thorne.jpeg"
                        alt="Chef Julian Thorne"
                        fill
                        sizes="(max-width: 1024px) 100vw, 548px"
                        className="object-cover"
                    />
                </div>
                <div
                    ref={quoteRef}
                    className="absolute -bottom-10 lg:bottom-12 lg:-left-10 bg-white p-8 rounded-card shadow-xl border border-border w-64 z-10"
                >
                    <p className="text-primary text-3xl font-bold font-playfair leading-snug">
                        "Fire is the<br />soul of our<br />kitchen."
                    </p>
                </div>
            </motion.div>
        </section>
    );
}