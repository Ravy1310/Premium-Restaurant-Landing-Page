"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/common/SmoothScroll";
import GalleryFilter from "@/components/sections/Gallery/GalleryFilter";
import GalleryGrid from "@/components/sections/Gallery/GalleryGrid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const headerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }

        gsap.registerPlugin(ScrollTrigger);

        if (!headerRef.current || !lineRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked or entrance accent line expansion
            gsap.fromTo(
                lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.2,
                    ease: "power3.out",
                }
            );
        }, headerRef);

        return () => ctx.revert();
    }, []);

    return (
        <SmoothScroll>
            <div className="w-full min-h-screen bg-stone-50 py-28 pt-[150px] px-6 md:px-12 lg:px-20">
                <div ref={headerRef} className="w-full max-w-[1280px] mx-auto flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-primary text-sm font-semibold font-inter uppercase tracking-[4.20px] mb-3"
                    >
                        VISUAL STORYTELLING
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-heading text-5xl md:text-6xl font-bold font-playfair mb-4 text-center"
                    >
                        Our Gallery
                    </motion.h1>

                    <div
                        ref={lineRef}
                        className="w-24 h-[2px] bg-secondary mb-6 origin-center scale-x-0"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-body text-lg text-center mb-12 max-w-2xl leading-relaxed"
                    >
                        Capturing moments of culinary artistry, where traditional craftsmanship meets modern innovation. Every frame reflects our dedication to fire, flavor, and fine dining.
                    </motion.p>

                    <GalleryFilter activeCategory={activeCategory} onFilterChange={setActiveCategory} />

                    <div className="w-full mt-6">
                        <GalleryGrid category={activeCategory} />
                    </div>
                </div>
            </div>
        </SmoothScroll>
    );
}