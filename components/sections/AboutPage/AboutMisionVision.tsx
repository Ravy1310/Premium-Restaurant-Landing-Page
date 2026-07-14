"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutMissionVision() {
    const sectionRef = useRef<HTMLElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);
    const visionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !missionRef.current || !visionRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked differential parallax for depth storytelling
            gsap.fromTo(
                missionRef.current,
                { y: 20 },
                {
                    y: -15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                visionRef.current,
                { y: 45 },
                {
                    y: -30,
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
            className="w-full max-w-[1280px] px-6 md:px-12 lg:px-20 pt-28 flex flex-col md:flex-row gap-6 mx-auto"
        >
            {/* Mission */}
            <motion.div
                ref={missionRef}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex-1 bg-white p-12 rounded-card shadow-card border border-border flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-300"
            >
                <div className="w-16 h-16 bg-primary rounded-xl flex justify-center items-center">
                    <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-primary text-3xl font-bold font-playfair">Our Mission</h3>
                <p className="text-body text-lg font-inter leading-relaxed">
                    To provide an unparalleled dining experience that transcends the meal itself, focusing on the artistry of wood-fire cooking, the warmth of genuine hospitality, and the purity of locally-sourced ingredients.
                </p>
            </motion.div>

            {/* Vision */}
            <motion.div
                ref={visionRef}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex-1 bg-primary p-12 rounded-card shadow-card flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-300"
            >
                <div className="w-16 h-16 bg-white rounded-xl flex justify-center items-center">
                    <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-white text-3xl font-bold font-playfair">Our Vision</h3>
                <p className="text-white/80 text-lg font-inter leading-relaxed">
                    To be recognized globally as the pinnacle of modern editorial luxury in the culinary world, setting the standard for sustainable fine dining and innovative craftsmanship in every ember we stoke.
                </p>
            </motion.div>
        </section>
    );
}