"use client";

import { useEffect } from "react";
import SmoothScroll from "@/components/common/SmoothScroll";
import TestiHero from "@/components/sections/Testimonials/TestimonalHero";
import TestiFeatured from "@/components/sections/Testimonials/TestiFeatured";
import TestiGrid from "@/components/sections/Testimonials/TestiGrid";
import TestiCTA from "@/components/sections/Testimonials/TestiCTA";

export default function TestimonialsPage() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <SmoothScroll>
            <div className="w-full min-h-screen bg-stone-50 pt-[88px] flex flex-col items-center">
                <TestiHero />
                <TestiFeatured />
                <TestiGrid />
                <TestiCTA />
            </div>
        </SmoothScroll>
    );
}