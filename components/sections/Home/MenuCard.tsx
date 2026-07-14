"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";

interface MenuCardProps {
    name: string;
    category: string;
    rating: string;
    description: string;
    price: string;
    image: string;
    index: number;
}

export default function MenuCard({ name, category, rating, description, price, image, index }: MenuCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="menu-signature-card flex flex-col relative bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300"
        >
            {/* Gambar */}
            <div className="p-6 pb-0 h-64 w-full">
                <div className="menu-card-img relative w-full h-full rounded-image overflow-hidden">
                    <Image
                        src={encodeURI(image)}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                </div>
            </div>

            {/* Konten */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-primary text-sm font-inter uppercase tracking-wide">{category}</span>
                    <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                        <span className="text-accent text-sm font-inter">{rating}</span>
                    </div>
                </div>

                <h3 className="text-heading text-xl font-bold font-playfair mb-3">{name}</h3>
                <p className="text-body text-base font-inter mb-6 flex-grow">{description}</p>

                <div className="pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-heading text-xl font-semibold font-playfair">{price}</span>
                    <Link href="#reservation" className="group flex items-center gap-1 text-primary text-sm font-semibold font-inter hover:text-primary/80 transition-colors">
                        Order Now
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
