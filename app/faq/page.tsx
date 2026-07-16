"use client";

import { useEffect } from "react";
import SmoothScroll from "@/components/common/SmoothScroll";
import FAQHero from "@/components/sections/FAQ/FAQHero";
import FAQContent from "@/components/sections/FAQ/FAQContent";

export default function FAQPage() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <SmoothScroll>
            <div className="w-full min-h-screen bg-stone-50 pt-[88px]">
                <FAQHero />
                <FAQContent />
            </div>
        </SmoothScroll>
    );
}