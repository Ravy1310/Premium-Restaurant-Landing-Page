"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonial";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TestiGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !lineRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked or entrance accent line expansion
            gsap.fromTo(
                lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "top 40%",
                        scrub: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-stone-100 py-28 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-16">
                {/* Section Header */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <span className="text-primary text-sm font-semibold font-inter uppercase tracking-[3px]">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-heading text-4xl md:text-5xl font-bold font-playfair">
                        Guest Experiences
                    </h2>
                    <div
                        ref={lineRef}
                        className="w-24 h-1 bg-primary origin-center scale-x-0"
                    />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {testimonials.map((testi, i) => (
                        <motion.div
                            key={testi.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.15 }}
                            transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="bg-stone-50 p-10 rounded-card shadow-card flex flex-col gap-6 cursor-pointer border border-stone-200/60 hover:border-primary/30 transition-colors"
                        >
                            {/* Stars */}
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-body text-base font-inter leading-relaxed flex-grow italic">
                                "{testi.quote}"
                            </p>

                            {/* Author & Date */}
                            <div className="flex justify-between items-center pt-4 border-t border-stone-200">
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-12 h-12 rounded-full flex justify-center items-center text-base font-bold font-inter shadow-sm ${testi.color}`}
                                    >
                                        {testi.initials}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-heading text-sm font-semibold font-inter">
                                            {testi.author}
                                        </span>
                                        <span className="text-primary text-xs font-semibold font-inter uppercase tracking-wider">
                                            VERIFIED GUEST
                                        </span>
                                    </div>
                                </div>
                                <span className="text-body/40 text-xs font-inter uppercase">
                                    {testi.date}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}