import Link from "next/link";
function Instagram({ size = 20, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function Facebook({ size = 20, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function Twitter({ size = 20, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="w-full bg-stone-200 py-28 text-body">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1280px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Logo & Deskripsi */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-primary text-3xl font-bold font-playfair">Ember & Oak</h2>
                        <p className="text-base font-inter leading-relaxed">
                            Elevating the dining experience<br />with every dish.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-heading text-xl font-bold font-playfair">Links</h3>
                        <div className="flex flex-col gap-2">
                            {["Home", "Menu", "About", "Gallery", "Testimonials", "Reservation", "Contact", "FAQ"].map((link) => (
                                <Link key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors text-base font-inter">
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-heading text-xl font-bold font-playfair">Contact</h3>
                        <div className="flex flex-col gap-2 font-inter text-base">
                            <p>123 Culinary Ave, NY 10012</p>
                            <p>+1 (555) 123-4567</p>
                            <p>hello@emberandoak.com</p>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-heading text-xl font-bold font-playfair">Hours</h3>
                        <div className="flex flex-col gap-2 font-inter text-base">
                            <p>Mon - Thu: 5pm - 10pm</p>
                            <p>Fri - Sat: 5pm - 11pm</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>
                </div>

                {/* Copyright & Socials */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm font-inter">© 2026 Ember & Oak. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" aria-label="Instagram" className="text-body hover:text-primary transition-colors">
                            <Instagram size={20} strokeWidth={2} />
                        </Link>
                        <Link href="#" aria-label="Facebook" className="text-body hover:text-primary transition-colors">
                            <Facebook size={20} strokeWidth={2} />
                        </Link>
                        <Link href="#" aria-label="Twitter" className="text-body hover:text-primary transition-colors">
                            <Twitter size={20} strokeWidth={2} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}