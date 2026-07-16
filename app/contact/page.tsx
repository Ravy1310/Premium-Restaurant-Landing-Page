"use client";

import { useEffect } from "react";
import SmoothScroll from "@/components/common/SmoothScroll";
import ContactHero from "@/components/sections/Contact/ContactHero";
import ContactGrid from "@/components/sections/Contact/ContactGrid";
import ContactMap from "@/components/sections/Contact/ContactMap";

export default function ContactPage() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <SmoothScroll>
            <div className="w-full min-h-screen bg-stone-50 pt-[88px] flex flex-col items-center">
                <ContactHero />
                <ContactGrid />
                <ContactMap />
            </div>
        </SmoothScroll>
    );
}