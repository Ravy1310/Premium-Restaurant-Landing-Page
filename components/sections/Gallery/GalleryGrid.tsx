"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GalleryGrid({ category }: { category: string }) {
    const gridRef = useRef<HTMLDivElement>(null);

    const filtered = category === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === category);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!gridRef.current) return;

        // Give React a tick to render the grid items
        const timer = setTimeout(() => {
            const ctx = gsap.context(() => {
                const cards = gsap.utils.toArray<HTMLElement>(".gallery-card-item");
                
                cards.forEach((card, index) => {
                    const img = card.querySelector(".gallery-img-parallax");

                    // Scroll-linked continuous image parallax inside card
                    if (img) {
                        gsap.fromTo(
                            img,
                            { scale: 1.15, y: -25 },
                            {
                                scale: 1.05,
                                y: 25,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: card,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: true,
                                },
                            }
                        );
                    }
                });

                ScrollTrigger.refresh();
            }, gridRef);

            return () => ctx.revert();
        }, 100);

        return () => clearTimeout(timer);
    }, [category]);

    return (
        <motion.div
            ref={gridRef}
            layout
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <AnimatePresence mode="popLayout">
                {filtered.map((item, index) => (
                    <motion.div
                        layout
                        key={item.id}
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.15 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                        className="gallery-card-item w-full relative group overflow-hidden rounded-image h-[400px] shadow-card cursor-pointer"
                    >
                        <div className="gallery-img-parallax absolute inset-0 w-full h-full">
                            <Image
                                src={encodeURI(item.image)}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-10">
                            <span className="text-secondary text-xs font-semibold font-inter uppercase tracking-widest mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {item.category}
                            </span>
                            <h3 className="text-white text-2xl font-playfair font-bold leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                {item.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}