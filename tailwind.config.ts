import type { Config } from "tailwindcss";

const config = {
    darkMode: "class",
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1280px",
            },
        },
        extend: {
            colors: {
                background: "#FAF7F2",
                primary: "#8B4513",
                secondary: "#D4A373",
                accent: "#C97C5D",
                heading: "#1B1B1B",
                body: "#4B5563",
                border: "#E5E7EB",
                success: "#16A34A",
                danger: "#DC2626",
            },
            fontFamily: {
                playfair: ["var(--font-playfair)", "serif"],
                inter: ["var(--font-inter)", "sans-serif"],
            },
            boxShadow: {
                card: "0 10px 30px rgba(0,0,0,.08)",
                'card-hover': "0 20px 40px rgba(0,0,0,.12)",
                button: "0 8px 20px rgba(139,69,19,.25)",
            },
            borderRadius: {
                card: "20px",
                button: "14px",
                input: "12px",
                image: "20px",
            }
        },
    },
    plugins: [],
} satisfies Config;

export default config;