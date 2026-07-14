"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { statistics } from "@/data/statistics";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !imageContainerRef.current || !imgRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                imgRef.current,
                { scale: 1.25, y: -20 },
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="w-full px-6 md:px-12 lg:px-28 py-28 bg-background flex justify-center relative overflow-hidden"
        >
            <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center gap-16">

                {/* Bagian Gambar */}
                <motion.div
                    ref={imageContainerRef}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:w-1/2 h-[450px] lg:h-[600px] relative rounded-image shadow-card overflow-hidden"
                >
                    <Image
                        ref={imgRef}
                        src="/images/hero/interior.jpeg"
                        alt="Ember & Oak Restaurant Interior"
                        fill
                        className="object-cover transition-transform duration-700"
                    />
                </motion.div>

                {/* bagian kanan */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-8"
                >
                    <div className="flex flex-col gap-3.5">
                        <span className="text-primary text-sm font-semibold font-inter uppercase tracking-wider">
                            OUR STORY
                        </span>
                        <h2 className="text-heading text-4xl md:text-5xl font-bold font-playfair leading-tight md:leading-[57.60px]">
                            A Legacy of Culinary<br className="hidden md:block" /> Excellence
                        </h2>
                    </div>

                    <p className="text-body text-base font-normal font-inter leading-relaxed">
                        Founded on the belief that a meal should be a memorable event, Ember & Oak brings together the elemental forces of fire and fine ingredients. Our chefs source locally and prepare globally, creating dishes that honor tradition while embracing modern innovation.
                    </p>

                    {/* statistik */}
                    <div className="w-full pt-8 border-t border-border grid grid-cols-3 gap-6">
                        {statistics.map((stat) => (
                            <div key={stat.id} className="flex flex-col items-start gap-2">
                                <h3 className="text-primary text-4xl md:text-5xl font-bold font-playfair">{stat.value}</h3>
                                <span className="text-body text-xs md:text-sm font-normal font-inter uppercase tracking-wide">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
