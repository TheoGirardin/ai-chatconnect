import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            colors: {
                "accent-1": "#FAFAFA",
                "accent-2": "#EAEAEA",
                "accent-7": "#333",
                success: "#0070f3",
                cyan: "#79FFE1",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))"
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))"
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))"
                }
            },
            spacing: {
                "28": "7rem",
                exterior: "16px",
                interior: "12px",
                horizontalBar: "32px"
            },
            letterSpacing: {
                tighter: "-.04em"
            },
            fontSize: {
                "5xl": "2.5rem",
                "6xl": "2.75rem",
                "7xl": "4.5rem",
                "8xl": "6.25rem"
            },
            boxShadow: {
                sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
                md: "0 8px 30px rgba(0, 0, 0, 0.12)"
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" }
                },
                "fade-out": {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" }
                },
                "slide-fade-in": {
                    "0%": { opacity: "0", transform: "translateY(-20%)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                }
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
                "fade-out": "fade-out 0.3s ease-out",
                "slide-fade-in": "slide-fade-in 0.5s ease-out forwards",
                "slide-fade-in-delay": "slide-fade-in 0.5s ease-out 0.5s forwards",
                "slide-fade-in-delay-2": "fade-in 0.5s ease-out 1s forwards",
                "slide-fade-in-delay-3": "fade-in 0.5s ease-out 1.2s forwards"
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            }
        }
    },
    safelist: [
        {
            pattern: /border-(red|orange|yellow|violet|blue|green|gray)-(300|400|500|600|700|800|900)/,
            variants: ["hover", "focus"]
        },
        {
            pattern: /bg-(red|orange|yellow|violet|blue|green|gray)-(300|400|500|600|700|800|900)/,
            variants: ["hover", "focus"]
        },
        {
            pattern: /text-(red|orange|yellow|violet|blue|green|gray)-(300|400|500|600|700|800|900)/,
            variants: ["hover", "focus"]
        }
    ],
    plugins: [require("tailwindcss-animate")]
};

export default config;
