
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Retro game theme colors
				retro: {
					purple: '#8B5CF6',
					'dark-purple': '#5B21B6',
					blue: '#3B82F6',
					'dark-blue': '#1E40AF',
					green: '#10B981',
					'dark-green': '#065F46',
					yellow: '#F59E0B',
					'dark-yellow': '#B45309',
					red: '#EF4444',
					'dark-red': '#991B1B',
					black: '#111827',
					'dark-gray': '#1F2937',
					gray: '#4B5563',
					'light-gray': '#9CA3AF',
					white: '#F9FAFB',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pixel-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' },
				},
				'pixel-fade-in': {
					'0%': { opacity: '0', transform: 'translateY(8px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'pixel-pulse': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
				},
				'pixelate': {
					'0%': { filter: 'blur(10px)' },
					'100%': { filter: 'blur(0)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-bounce': 'pixel-bounce 0.5s infinite',
				'pixel-fade-in': 'pixel-fade-in 0.3s ease-out',
				'pixel-pulse': 'pixel-pulse 2s infinite',
				'pixelate': 'pixelate 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'blink': 'blink 1s ease-in-out infinite'
			},
			fontFamily: {
				'pixel': ['"Press Start 2P"', 'cursive'],
				'retro': ['"VT323"', 'monospace'],
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography")
	],
} satisfies Config;
