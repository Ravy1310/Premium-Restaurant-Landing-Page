"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface MenuItem {
    id: string;
    name: string;
    price: string;
    description: string;
    tags: string[];
    image: string;
}

interface MenuItemCardProps {
    item: MenuItem;
    index: number;
}

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            className="flex flex-col sm:flex-row gap-6 group cursor-pointer"
        >
            {/* Item Image */}
            <div className="menu-item-card-image w-full sm:w-44 h-56 sm:h-auto aspect-[4/5] sm:aspect-auto relative rounded-image shadow-card overflow-hidden shrink-0">
                <Image
                    src={encodeURI(item.image)}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 176px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Item Details */}
            <div className="flex flex-col justify-center flex-1 py-2">
                <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-heading text-xl font-semibold font-inter leading-tight group-hover:text-primary transition-colors">
                        {item.name}
                    </h3>
                    <span className="text-primary text-lg font-semibold font-inter tracking-wide shrink-0">
                        {item.price}
                    </span>
                </div>

                <p className="text-body text-base font-normal font-inter leading-relaxed mb-4">
                    {item.description}
                </p>

                {/* Tags */}
                {item.tags.length > 0 && (
                    <div className="mt-auto pt-2 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-stone-200 text-body text-xs font-semibold font-inter uppercase tracking-wider rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
