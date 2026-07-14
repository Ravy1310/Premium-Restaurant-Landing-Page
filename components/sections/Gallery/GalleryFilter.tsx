"use client";

interface FilterProps {
    activeCategory: string;
    onFilterChange: (category: string) => void;
}

export default function GalleryFilter({ activeCategory, onFilterChange }: FilterProps) {
    const categories = ["All", "Cuisine", "Drinks", "Desserts", "Atmosphere"];

    return (
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onFilterChange(cat)}
                    className={`px-8 py-3 rounded-full border border-primary transition-all ${activeCategory === cat
                            ? "bg-primary text-white"
                            : "bg-transparent text-primary hover:bg-primary/10"
                        }`}
                >
                    {cat.toUpperCase()}
                </button>
            ))}
        </div>
    );
}