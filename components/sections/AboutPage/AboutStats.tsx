"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutStats() {
    const sectionRef = useRef<HTMLElement>(null);

    const statsData = [
        { value: "10+", label: "Years of Excellence" },
        { value: "500+", label: "Happy Guests Monthly" },
        { value: "50+", label: "Signature Dishes" },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const lines = gsap.utils.toArray<HTMLElement>(".stat-accent-line");
            lines.forEach((line) => {
                gsap.fromTo(
                    line,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: line,
                            start: "top 85%",
                            end: "top 65%",
                            scrub: true,
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-stone-100 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {statsData.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                        className="flex flex-col items-center text-center gap-4"
                    >
                        <h3 className="text-primary text-5xl md:text-6xl font-bold font-playfair">
                            {stat.value}
                        </h3>
                        <span className="text-body text-sm font-semibold font-inter uppercase tracking-wider">
                            {stat.label}
                        </span>
                        <div className="stat-accent-line w-16 h-[2px] bg-secondary origin-center scale-x-0" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}