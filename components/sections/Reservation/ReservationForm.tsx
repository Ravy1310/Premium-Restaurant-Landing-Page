"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Calendar,
    CalendarCheck,
    Clock,
    Users,
    User,
    UserCheck,
    Mail,
    Phone,
    MessageSquare,
    Utensils,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

export default function ReservationForm() {
    const formRef = useRef<HTMLDivElement>(null);
    const lineDiningRef = useRef<HTMLDivElement>(null);
    const linePersonalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!formRef.current || !lineDiningRef.current || !linePersonalRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked form container elevation and depth animation
            gsap.fromTo(
                formRef.current,
                { y: 35, boxShadow: "0 4px 15px rgba(0,0,0,0.03)" },
                {
                    y: 0,
                    boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 90%",
                        end: "top 55%",
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                lineDiningRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: lineDiningRef.current,
                        start: "top 85%",
                        end: "top 60%",
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                linePersonalRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: linePersonalRef.current,
                        start: "top 85%",
                        end: "top 60%",
                        scrub: true,
                    },
                }
            );
        }, formRef);

        return () => ctx.revert();
    }, []);

    return (
        <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 md:p-12 rounded-card shadow-card border border-stone-200/80 flex flex-col gap-10"
        >
            {/* Dining Details Group */}
            <div className="flex flex-col gap-8">
                <div>
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary flex items-center gap-3 mb-2">
                        <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/20">
                            <CalendarCheck className="w-5 h-5" />
                        </div>
                        Dining Details
                    </h3>
                    <div
                        ref={lineDiningRef}
                        className="w-20 h-1 bg-primary origin-left scale-x-0 ml-14"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Date Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            Date
                        </label>
                        <input
                            type="date"
                            className="h-14 px-4 bg-stone-50 rounded-input border border-stone-200 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm font-inter text-heading"
                        />
                    </div>

                    {/* Time Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            Time
                        </label>
                        <input
                            type="time"
                            className="h-14 px-4 bg-stone-50 rounded-input border border-stone-200 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm font-inter text-heading"
                        />
                    </div>

                    {/* Guests Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            Guests
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="20"
                            placeholder="2 Guests"
                            className="h-14 px-4 bg-stone-50 rounded-input border border-stone-200 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm font-inter text-heading"
                        />
                    </div>
                </div>
            </div>

            {/* Personal Info Group */}
            <div className="flex flex-col gap-8">
                <div>
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary flex items-center gap-3 mb-2">
                        <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/20">
                            <UserCheck className="w-5 h-5" />
                        </div>
                        Personal Information
                    </h3>
                    <div
                        ref={linePersonalRef}
                        className="w-20 h-1 bg-primary origin-left scale-x-0 ml-14"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" />
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="h-14 px-4 bg-stone-50 rounded-input border border-stone-200 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm font-inter text-heading"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="h-14 px-4 bg-stone-50 rounded-input border border-stone-200 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm font-inter text-heading"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="h-14 px-4 bg-stone-50 rounded-input border border-stone-200 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm font-inter text-heading"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-body text-xs font-semibold font-inter uppercase tracking-wider flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Special Requests (Optional)
                    </label>
                    <textarea
                        className="p-4 bg-stone-50 rounded-input border border-stone-200 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm font-inter resize-none text-heading"
                        rows={4}
                        placeholder="Allergies, dietary requirements, anniversaries, or preferred seating arrangements..."
                    />
                </div>
            </div>

            {/* Security Notice */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-center gap-3 text-xs md:text-sm text-stone-700 font-inter">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span>
                    <strong>Instant & Secure Booking:</strong> Your reservation is immediately confirmed via email with priority seating allocation.
                </span>
            </div>

            {/* Submit Button */}
            <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-16 px-12 bg-primary text-white font-semibold font-inter rounded-button shadow-button hover:bg-primary/90 transition-all flex items-center justify-center gap-3 text-base cursor-pointer"
            >
                <Utensils className="w-5 h-5" />
                <span>Confirm Table Reservation</span>
                <Sparkles className="w-4 h-4 text-secondary ml-1" />
            </motion.button>
        </motion.div>
    );
}