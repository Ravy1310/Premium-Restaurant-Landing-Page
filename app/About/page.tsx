"use client";

import { useEffect } from "react";
import SmoothScroll from "@/components/common/SmoothScroll";
import AboutHero from "@/components/sections/AboutPage/AboutHero";
import AboutPhilosophy from "@/components/sections/AboutPage/AboutPhilosophy";
import AboutStats from "@/components/sections/AboutPage/AboutStats";
import AboutMissionVision from "@/components/sections/AboutPage/AboutMisionVision";
import AboutCoreValues from "@/components/sections/AboutPage/AboutCoreValues";

export default function AboutPage() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <SmoothScroll>
            <div className="w-full min-h-screen bg-background flex flex-col items-center pb-28 pt-[88px]">
                <AboutHero />
                <AboutPhilosophy />
                <AboutStats />
                <AboutMissionVision />
                <AboutCoreValues />
            </div>
        </SmoothScroll>
    );
}