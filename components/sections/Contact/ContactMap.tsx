"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactMap() {
    const sectionRef = useRef<HTMLElement>(null);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !mapContainerRef.current || !lineRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked map reveal (subtle zoom out and upward glide)
            gsap.fromTo(
                mapContainerRef.current,
                { scale: 0.94, y: 40 },
                {
                    scale: 1,
                    y: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        end: "top 45%",
                        scrub: true,
                    },
                }
            );

            // Underline expansion
            gsap.fromTo(
                lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        end: "top 50%",
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
            className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pb-32 flex flex-col items-center gap-12"
        >
            <div className="flex flex-col items-center gap-3 text-center">
                <span className="text-secondary text-xs font-semibold font-inter uppercase tracking-[3.5px]">
                    LOCATION
                </span>
                <h2 className="text-heading text-3xl md:text-4xl font-bold font-playfair">
                    Find Us on the Map
                </h2>
                <div
                    ref={lineRef}
                    className="w-24 h-1 bg-primary origin-center scale-x-0"
                />
            </div>

            <motion.div
                ref={mapContainerRef}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="w-full h-[450px] md:h-[540px] rounded-image shadow-card overflow-hidden border border-stone-200 bg-stone-100 cursor-pointer"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.4756113642143!2d-83.51716328927903!3d42.72868651161439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88249f90ca7d1541%3A0x40b41eb5aea519df!2sMotor%20City%20Auto%20Consultants%20LLC!5e1!3m2!1sid!2sid!4v1784177624061!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="eager"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Ember and Oak Restaurant Location Map"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </motion.div>
        </section>
    );
}