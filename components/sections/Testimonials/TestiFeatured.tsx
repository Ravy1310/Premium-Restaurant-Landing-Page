"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { featuredReview } from "@/data/testimonial";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TestiFeatured() {
    const sectionRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const quoteMarkRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !imgRef.current || !quoteMarkRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked continuous parallax on featured image
            gsap.fromTo(
                imgRef.current,
                { scale: 1.15, y: -25 },
                {
                    scale: 1.02,
                    y: 25,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            // Floating giant quote mark differential parallax
            gsap.fromTo(
                quoteMarkRef.current,
                { y: -45 },
                {
                    y: 45,
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
            className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-28 overflow-hidden"
        >
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Quote Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 relative flex flex-col items-start"
                >
                    {/* Giant Quote Mark */}
                    <span
                        ref={quoteMarkRef}
                        className="absolute -left-8 -top-14 text-primary/10 text-[180px] font-playfair leading-none select-none pointer-events-none"
                    >
                        “
                    </span>

                    <div className="relative z-10 flex flex-col gap-8">
                        <h2 className="text-primary text-4xl md:text-5xl font-bold font-playfair leading-snug">
                            {featuredReview.quote}
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-px bg-primary" />
                            <div className="flex flex-col">
                                <span className="text-heading text-xl font-semibold font-inter">
                                    {featuredReview.author}
                                </span>
                                <span className="text-body text-sm font-semibold font-inter uppercase tracking-wider">
                                    {featuredReview.role}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full"
                >
                    <div className="relative w-full h-[420px] md:h-[520px] rounded-image shadow-card overflow-hidden">
                        <Image
                            ref={imgRef}
                            src={encodeURI("/images/testimonials/Featured Review.jpeg")}
                            alt="Featured Review"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}