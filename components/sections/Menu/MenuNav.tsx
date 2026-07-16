"use client";

import React from "react";
import { fullMenu } from "@/data/menu";

interface MenuNavProps {
    onSelectCategory: (id: string) => void;
}

export default function MenuNav({ onSelectCategory }: MenuNavProps) {
    return (
        <div className="w-full sticky top-[88px] z-40 bg-stone-50/95 backdrop-blur-md border-b border-border mb-12">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
                <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 py-4">
                    {fullMenu.map((section) => (
                        <li key={`nav-${section.id}`}>
                            <button
                                type="button"
                                onPointerDown={(e) => {
                                    if (e.button !== 0) return;
                                    onSelectCategory(section.id);
                                }}
                                onClick={() => onSelectCategory(section.id)}
                                className="text-body hover:text-primary text-sm font-semibold font-inter transition-colors relative group py-1 cursor-pointer select-none"
                            >
                                {section.category}
                                <span className="absolute left-0 bottom-[-16px] w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
