"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fullMenu } from "@/data/menu";
import MenuItemCard from "./MenuItemCard";

export default function MenuSectionList() {
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!listRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-linked line draw for every section header
            const sections = gsap.utils.toArray<HTMLElement>(".menu-category-section");
            sections.forEach((section) => {
                const line = section.querySelector(".section-accent-line");
                if (line) {
                    gsap.fromTo(
                        line,
                        { scaleX: 0 },
                        {
                            scaleX: 1,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 85%",
                                end: "top 60%",
                                scrub: true,
                            },
                        }
                    );
                }
            });

            // Scroll-linked continuous parallax for every menu card image
            const cardImages = gsap.utils.toArray<HTMLElement>(".menu-item-card-image");
            cardImages.forEach((img) => {
                gsap.fromTo(
                    img,
                    { scale: 1.15, y: -15 },
                    {
                        scale: 1,
                        y: 15,
                        ease: "none",
                        scrollTrigger: {
                            trigger: img,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            });
        }, listRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={listRef} className="w-full max-w-[1280px] px-6 md:px-12 lg:px-20 flex flex-col gap-24">
            {fullMenu.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className="menu-category-section scroll-mt-[180px]"
                >
                    {/* Section Header with Scroll-Linked Accent Line */}
                    <div className="w-full border-b border-border pb-4 mb-10 relative">
                        <h2 className="text-heading text-4xl md:text-5xl font-bold font-playfair">
                            {section.category}
                        </h2>
                        <div className="section-accent-line absolute bottom-0 left-0 h-[3px] w-32 bg-primary origin-left scale-x-0" />
                    </div>

                    {/* Menu Items Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                        {section.items.map((item, index) => (
                            <MenuItemCard key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
