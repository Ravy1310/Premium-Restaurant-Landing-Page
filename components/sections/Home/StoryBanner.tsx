"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StoryBanner() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !textRef.current) return;

        const words = textRef.current.querySelectorAll(".story-word");

        const ctx = gsap.context(() => {
            gsap.fromTo(
                words,
                { opacity: 0.2, y: 15 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        end: "bottom 60%",
                        scrub: 1,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const quote = "Fire is our foundation. Oak is our heritage. Every plate tells a story of patience, time, and culinary perfection.";
    const words = quote.split(" ");

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 md:py-32 bg-stone-900 text-stone-100 flex justify-center items-center px-6 md:px-12 lg:px-20 relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8B4513_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="max-w-4xl text-center z-10">
                <span className="text-secondary text-xs md:text-sm font-semibold tracking-[0.3em] uppercase block mb-6">
                    THE CULINARY PHILOSOPHY
                </span>
                <p
                    ref={textRef}
                    className="text-3xl md:text-5xl lg:text-6xl font-playfair font-normal leading-snug md:leading-tight"
                >
                    {words.map((word, idx) => (
                        <span
                            key={idx}
                            className="story-word inline-block mr-2.5 md:mr-3.5 transition-colors"
                        >
                            {word}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
}
