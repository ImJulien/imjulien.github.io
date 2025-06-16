import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
        pixelify: ["Pixelify Sans", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Gaming platform custom colors
        gaming: {
          bg: "#27374D",
          sidebar: "#1B2736",
          card: "#2A3B50",
          header: "#212E40",
          expander: "#233040",
          button: "#3469B4",
          accent: "#5C7CA9",
          casino: "#2B4A71",
          betting: "#48ABAE",
          text: "#FFFFFF",
          link: "#3AA0FF",
          dark: "#18202C",
        },
        gradient: {
          casino: {
            from: "#2B4A71",
            to: "#3B80D7",
          },
          betting: {
            from: "#48ABAE",
            to: "#75F8FD",
          },
          gold: {
            from: "#BFBC67",
            to: "#F2B33D",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        gaming: "0px 2px 3px 0px rgba(0, 0, 0, 0.25)",
        "gaming-strong": "0px 4px 3px 0px rgba(0, 0, 0, 0.25)",
        "gaming-inner": "inset 0px 1px 6px 3px rgba(0, 0, 0, 0.30)",
        "gaming-text": "0px 3px 6px rgba(0, 0, 0, 0.30)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
