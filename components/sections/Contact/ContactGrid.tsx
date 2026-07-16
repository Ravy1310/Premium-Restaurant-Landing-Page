"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineLeftRef = useRef<HTMLDivElement>(null);
    const lineRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !lineLeftRef.current || !lineRightRef.current) return;

        const ctx = gsap.context(() => {
            // Left column underline expansion
            gsap.fromTo(
                lineLeftRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: lineLeftRef.current,
                        start: "top 85%",
                        end: "top 55%",
                        scrub: true,
                    },
                }
            );

            // Right column underline expansion
            gsap.fromTo(
                lineRightRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: lineRightRef.current,
                        start: "top 85%",
                        end: "top 55%",
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
            className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-28 flex flex-col lg:flex-row gap-16 lg:gap-12 items-stretch"
        >
            {/* Kiri: Informasi & Jam Buka */}
            <motion.div
                initial={{ opacity: 0, x: -45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex flex-col gap-12 justify-between"
            >
                <div className="flex flex-col gap-6">
                    <div>
                        <span className="text-secondary text-xs font-semibold font-inter uppercase tracking-[3px] mb-2 block">
                            GET IN TOUCH
                        </span>
                        <h2 className="text-primary text-4xl md:text-5xl font-bold font-playfair mb-3">
                            Contact Details
                        </h2>
                        <div
                            ref={lineLeftRef}
                            className="w-20 h-1 bg-primary origin-left scale-x-0"
                        />
                    </div>

                    <div className="flex flex-col gap-6 mt-4">
                        <motion.div
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-4 p-4 rounded-card bg-white border border-stone-200/60 shadow-sm transition-colors hover:border-primary/30"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-primary text-xs font-semibold font-inter uppercase tracking-wider">
                                    Visit Us
                                </span>
                                <p className="text-heading text-base font-inter leading-relaxed">
                                    123 Culinary Boulevard,<br />Gastronomy Heights, NY 10012
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-4 p-4 rounded-card bg-white border border-stone-200/60 shadow-sm transition-colors hover:border-primary/30"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-primary text-xs font-semibold font-inter uppercase tracking-wider">
                                    Call Us
                                </span>
                                <p className="text-heading text-base font-inter leading-relaxed">
                                    (555) 012-3456
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-4 p-4 rounded-card bg-white border border-stone-200/60 shadow-sm transition-colors hover:border-primary/30"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-primary text-xs font-semibold font-inter uppercase tracking-wider">
                                    Email Us
                                </span>
                                <p className="text-heading text-base font-inter leading-relaxed">
                                    hello@emberandoak.com
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Jam Buka Card */}
                <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="bg-stone-100 p-8 md:p-10 rounded-card shadow-card flex flex-col gap-6 border border-stone-200"
                >
                    <div className="flex justify-between items-center pb-4 border-b border-stone-300">
                        <h3 className="text-primary text-3xl font-bold font-playfair">
                            Opening Hours
                        </h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                            Open Daily
                        </span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span className="text-heading text-base font-inter font-medium">Monday — Friday</span>
                            <span className="text-secondary text-sm font-semibold font-inter tracking-wide">
                                5:00 PM — 11:00 PM
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-heading text-base font-inter font-medium">Saturday — Sunday</span>
                            <span className="text-secondary text-sm font-semibold font-inter tracking-wide">
                                11:00 AM — 12:00 PM
                            </span>
                        </div>
                    </div>
                    <p className="pt-4 border-t border-stone-300 text-body/80 text-xs font-inter leading-relaxed">
                        Note: Our kitchen closes 45 minutes prior to closing time. Smart casual dress code applies.
                    </p>
                </motion.div>
            </motion.div>

            {/* Kanan: Form Kirim Pesan */}
            <motion.div
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className="flex-1 bg-white p-8 md:p-12 rounded-card shadow-card border border-stone-200 flex flex-col gap-6"
            >
                <div>
                    <span className="text-secondary text-xs font-semibold font-inter uppercase tracking-[3px] mb-2 block">
                        DIRECT INQUIRY
                    </span>
                    <h2 className="text-primary text-3xl md:text-4xl font-bold font-playfair mb-3">
                        Send a Message
                    </h2>
                    <div
                        ref={lineRightRef}
                        className="w-20 h-1 bg-primary origin-left scale-x-0"
                    />
                </div>

                <form className="flex flex-col gap-6 mt-2">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 flex flex-col gap-2">
                            <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full h-14 px-4 bg-stone-50 rounded-input border border-stone-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all text-sm font-inter"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="w-full h-14 px-4 bg-stone-50 rounded-input border border-stone-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all text-sm font-inter"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider">
                            Subject
                        </label>
                        <select className="w-full h-14 px-4 bg-stone-50 rounded-input border border-stone-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all appearance-none cursor-pointer text-sm font-inter">
                            <option>General Inquiry</option>
                            <option>Private Dining & Events</option>
                            <option>Feedback & Guest Care</option>
                            <option>Press & Media Collaborations</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider">
                            Your Message
                        </label>
                        <textarea
                            placeholder="How can our hospitality team assist you today?"
                            rows={4}
                            className="w-full p-4 bg-stone-50 rounded-input border border-stone-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all resize-none text-sm font-inter leading-relaxed"
                        />
                    </div>

                    <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full h-14 bg-primary text-white rounded-button font-semibold font-inter flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-button mt-2"
                    >
                        Send Inquiry
                        <Send className="w-4 h-4" />
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
}