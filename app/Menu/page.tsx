"use client";

import { useEffect } from "react";
import SmoothScroll from "@/components/common/SmoothScroll";
import MenuHero from "@/components/sections/Menu/MenuHero";
import MenuNav from "@/components/sections/Menu/MenuNav";
import MenuSectionList from "@/components/sections/Menu/MenuSectionList";

export default function MenuPage() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.location.hash) {
                const id = window.location.hash.replace("#", "");
                const timeout = setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        const yOffset = -160;
                        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                    }
                }, 150);
                return () => clearTimeout(timeout);
            } else {
                window.scrollTo(0, 0);
            }
        }
    }, []);

    const scrollToCategory = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -160;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            window.history.pushState(null, "", `#${id}`);
        }
    };

    return (
        <SmoothScroll>
            <div className="w-full min-h-screen bg-stone-50 flex flex-col items-center pb-28 pt-[88px]">
                <MenuHero />
                <MenuNav onSelectCategory={scrollToCategory} />
                <MenuSectionList />
            </div>
        </SmoothScroll>
    );
}