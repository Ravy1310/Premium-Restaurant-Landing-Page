"use client";

import { useEffect } from "react";
import SmoothScroll from "@/components/common/SmoothScroll";
import ReservationHero from "@/components/sections/Reservation/ReservationHero";
import ReservationForm from "@/components/sections/Reservation/ReservationForm";
import InfoSidebar from "@/components/sections/Reservation/InfoSidebar";

export default function ReservationPage() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <SmoothScroll>
            <div className="w-full min-h-screen bg-stone-50 pb-28 pt-[88px]">
                <ReservationHero />
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 -mt-24 relative z-20 flex flex-col lg:flex-row gap-10 items-start">
                    <div className="w-full lg:w-2/3">
                        <ReservationForm />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <InfoSidebar />
                    </div>
                </div>
            </div>
        </SmoothScroll>
    );
}