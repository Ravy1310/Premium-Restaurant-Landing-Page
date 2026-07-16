"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/data/faq";
import { Calendar, Utensils, PartyPopper, HelpCircle, ChevronDown } from "lucide-react";

// ============================================================================
// PANDUAN UNTUK OWNER / USER: CARA MENGGANTI ATAU MENAMBAHKAN ICON
// ============================================================================
// Anda dapat dengan sangat mudah mengganti icon untuk Bento Navigation di bawah ini.
// 1. Jika ingin memakai Lucide icon lain: cukup impor icon dari "lucide-react" di atas,
//    lalu pasang pada properti `icon:` di bawah ini.
// 2. Jika ingin memakai gambar / SVG milik sendiri:
//    Ganti nilai `icon:` dengan komponen <Image /> atau tag <img> biasa.
//    Contoh:
//    icon: <Image src="/icons/custom-reservation.png" width={28} height={28} alt="Icon" />
// ============================================================================

const faqNavItems = [
    {
        label: "Reservations",
        // -> Tempat mengganti icon Reservations:
        icon: <Calendar className="w-7 h-7 text-primary" />,
    },
    {
        label: "Dining",
        // -> Tempat mengganti icon Dining:
        icon: <Utensils className="w-7 h-7 text-primary" />,
    },
    {
        label: "Events",
        // -> Tempat mengganti icon Events:
        icon: <PartyPopper className="w-7 h-7 text-primary" />,
    },
    {
        label: "General",
        // -> Tempat mengganti icon General:
        icon: <HelpCircle className="w-7 h-7 text-primary" />,
    },
];

export default function FAQContent() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        const element = document.getElementById(`faq-section-${category}`);
        if (element) {
            const yOffset = -140;
            if (typeof window !== "undefined" && typeof (window as any).lenis?.scrollTo === "function") {
                (window as any).lenis.scrollTo(element, {
                    offset: yOffset,
                    duration: 1.2,
                });
            } else {
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({
                    top: y,
                    behavior: "smooth",
                });
            }
            window.history.pushState(null, "", `#faq-section-${category}`);
        }
    };

    return (
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-28 flex flex-col gap-20">
            {/* Bento Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {faqNavItems.map((item) => (
                    <motion.button
                        key={item.label}
                        type="button"
                        onPointerDown={(e) => {
                            if (e.button !== 0) return; // Only left click or touch
                            handleCategoryClick(item.label);
                        }}
                        onClick={() => handleCategoryClick(item.label)}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="p-8 bg-stone-100 rounded-card flex flex-col items-center gap-4 cursor-pointer hover:bg-amber-100/60 hover:shadow-card transition-all border border-stone-200/80 group text-center focus:outline-none focus:ring-2 focus:ring-primary/40 select-none"
                    >
                        {/* Tempat render Icon */}
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 pointer-events-none">
                            {item.icon}
                        </div>
                        <span className="font-inter font-semibold text-heading text-lg group-hover:text-primary transition-colors pointer-events-none">
                            {item.label}
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* Accordion List */}
            <div className="flex flex-col gap-16">
                {faqData.map((section) => (
                    <div
                        key={section.category}
                        id={`faq-section-${section.category}`}
                        className="flex flex-col gap-8 scroll-mt-32"
                    >
                        <div className="flex items-center gap-4 border-b border-stone-300 pb-4">
                            <h2 className="text-3xl font-playfair font-bold text-primary">
                                {section.category}
                            </h2>
                            <div className="flex-grow" />
                            <span className="text-body text-xs font-semibold font-inter uppercase tracking-widest">
                                {section.questions.length} QUESTIONS
                            </span>
                        </div>

                        <div className="flex flex-col gap-4">
                            {section.questions.map((item, idx) => {
                                const itemKey = `${section.category}-${idx}`;
                                const isOpen = openIndex === itemKey;

                                return (
                                    <motion.div
                                        key={idx}
                                        role="button"
                                        tabIndex={0}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                                        onClick={() => setOpenIndex(isOpen ? null : itemKey)}
                                        className={`p-6 md:p-8 rounded-card border transition-all cursor-pointer select-none focus:outline-none focus:ring-1 focus:ring-primary/40 ${isOpen
                                            ? "bg-white border-primary shadow-card"
                                            : "bg-white border-stone-200 hover:border-primary/40 shadow-sm"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center gap-4">
                                            <h3 className={`text-lg md:text-xl font-inter font-semibold leading-snug transition-colors ${isOpen ? "text-primary" : "text-heading"
                                                }`}>
                                                {item.q}
                                            </h3>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-primary text-white rotate-180" : "bg-stone-100 text-primary"
                                                }`}>
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="mt-4 pt-4 border-t border-stone-150 text-body text-base font-inter leading-relaxed">
                                                        {item.a}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}