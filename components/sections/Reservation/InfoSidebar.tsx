"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Sparkles,
    AlertCircle,
    Clock,
    PhoneCall,
    Headphones,
    Award,
    CheckCircle2,
} from "lucide-react";

export default function InfoSidebar() {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sidebarRef.current || !lineRef.current) return;

        const ctx = gsap.context(() => {
            // Asymmetric scroll-linked parallax for storytelling depth
            gsap.fromTo(
                sidebarRef.current,
                { y: 45 },
                {
                    y: -15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sidebarRef.current,
                        start: "top 90%",
                        end: "bottom 20%",
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: "top 85%",
                        end: "top 60%",
                        scrub: true,
                    },
                }
            );
        }, sidebarRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sidebarRef} className="flex flex-col gap-8">
            {/* Visual Ambiance Image Card */}
            <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className="relative h-[240px] rounded-card overflow-hidden shadow-card border border-stone-200/80 group"
            >
                <Image
                    src={encodeURI("/images/restaurant/Ember and Oak Atmosphere.jpeg")}
                    alt="Ember and Oak Dining Atmosphere"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent flex flex-col justify-end p-6 text-white" />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                    <Award className="w-3.5 h-3.5 text-secondary" />
                    <span>Michelin Guide Ambiance</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="text-secondary text-xs uppercase tracking-widest font-semibold block mb-1">
                        EXCLUSIVITY & WARMTH
                    </span>
                    <h4 className="text-xl font-playfair font-bold leading-snug">
                        Intimate Main Dining & Private Salons
                    </h4>
                </div>
            </motion.div>

            {/* Dining Information Card */}
            <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 bg-stone-100 rounded-card border border-stone-200/80 shadow-sm flex flex-col gap-6"
            >
                <div>
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-2">
                        Dining Information
                    </h3>
                    <div
                        ref={lineRef}
                        className="w-16 h-1 bg-primary origin-left scale-x-0"
                    />
                </div>

                <div className="text-body text-sm font-inter space-y-5 leading-relaxed">
                    <div className="flex gap-3 border-b border-stone-200 pb-4">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                            <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                            <strong className="text-heading block mb-1">Smart Casual Dress Code</strong>
                            <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                                We request that guests avoid beachwear, athletic apparel, and flip-flops to preserve an elegant dining atmosphere.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 border-b border-stone-200 pb-4">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                            <AlertCircle className="w-4 h-4" />
                        </div>
                        <div>
                            <strong className="text-heading block mb-1">Cancellation Policy</strong>
                            <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                                Please provide at least 24 hours notice for cancellations or guest count reductions to avoid a $35 per-person fee.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                            <Clock className="w-4 h-4" />
                        </div>
                        <div>
                            <strong className="text-heading block mb-1">Table Hold Time</strong>
                            <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                                Reserved tables are held for up to 15 minutes past the reservation time before being released.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Need Help Box */}
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="px-8 pt-8 pb-9 bg-primary rounded-card shadow-card text-white flex flex-col gap-3 relative overflow-hidden"
            >
                <div className="absolute top-[-30px] right-[-30px] w-32 h-32 rounded-full bg-white/10 pointer-events-none flex items-center justify-center">
                    <Headphones className="w-16 h-16 text-white/10" />
                </div>
                <span className="text-secondary text-xs font-semibold uppercase tracking-[3px] flex items-center gap-2">
                    <Headphones className="w-3.5 h-3.5" />
                    CONCIERGE & CARE
                </span>
                <h4 className="text-2xl font-playfair font-bold">
                    Need Help?
                </h4>
                <p className="text-white/85 text-sm font-inter leading-relaxed mb-3">
                    For groups of 8 or more, private dining rooms, or bespoke dietary arrangements, our concierge team is at your disposal.
                </p>
                <div className="pt-3 border-t border-white/20 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                        <PhoneCall className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                        <span className="text-xs text-white/70 block mb-0.5 uppercase tracking-wider">Direct Concierge</span>
                        <a
                            href="tel:+15551234567"
                            className="text-lg font-bold font-inter text-secondary hover:underline block"
                        >
                            +1 (555) 123-4567
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}