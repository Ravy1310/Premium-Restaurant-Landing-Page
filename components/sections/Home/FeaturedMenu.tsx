"use client";

import { useEffect, useRef } from "react";
import { signatureDishes } from "@/data/menu";
import MenuCard from "./MenuCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FeaturedMenu() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !headerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Continuous scroll-linked parallax for signature card images
            const cardImages = gsap.utils.toArray<HTMLElement>(".menu-card-img");
            cardImages.forEach((img) => {
                gsap.fromTo(
                    img,
                    { scale: 1.15, y: -12 },
                    {
                        scale: 1,
                        y: 12,
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="menu"
            className="w-full px-6 md:px-12 lg:px-20 py-28 bg-stone-100 flex flex-col items-center relative"
        >
            <div className="w-full max-w-[1280px] flex flex-col gap-16">

                {/* header Section */}
                <div ref={headerRef} className="flex flex-col items-center gap-3.5 text-center">
                    <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                        TASTE THE EXCELLENCE
                    </span>
                    <h2 className="text-heading text-4xl md:text-5xl font-bold font-playfair">Signature Dishes</h2>
                    <p className="text-body text-base font-inter">Carefully crafted using premium ingredients.</p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {signatureDishes.map((dish, index) => (
                        <MenuCard
                            key={dish.id}
                            index={index}
                            name={dish.name}
                            category={dish.category}
                            rating={dish.rating}
                            description={dish.description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
