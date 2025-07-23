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
				// PlayStation Gaming Colors
				'ps-blue': {
					DEFAULT: 'hsl(var(--ps-blue))',
					glow: 'hsl(var(--ps-blue-glow))',
					dark: 'hsl(var(--ps-blue-dark))'
				},
				'neon-green': {
					DEFAULT: 'hsl(var(--neon-green))',
					glow: 'hsl(var(--neon-green-glow))'
				},
				'neon-red': {
					DEFAULT: 'hsl(var(--neon-red))',
					glow: 'hsl(var(--neon-red-glow))'
				},
				'neon-cyan': 'hsl(var(--neon-cyan))',
				'neon-purple': 'hsl(var(--neon-purple))',
				bull: {
					DEFAULT: 'hsl(var(--bull))',
					glow: 'hsl(var(--bull-glow))',
					dark: 'hsl(var(--bull-dark))'
				},
				bear: {
					DEFAULT: 'hsl(var(--bear))',
					glow: 'hsl(var(--bear-glow))',
					dark: 'hsl(var(--bear-dark))'
				},
				console: {
					DEFAULT: 'hsl(var(--console-accent))',
					glow: 'hsl(var(--console-glow))'
				}
			},
			backgroundImage: {
				'gradient-ps-primary': 'var(--gradient-ps-primary)',
				'gradient-ps-dark': 'var(--gradient-ps-dark)',
				'gradient-console': 'var(--gradient-console)',
				'gradient-bull': 'var(--gradient-bull)',
				'gradient-bear': 'var(--gradient-bear)',
				'gradient-button': 'var(--gradient-button)',
				'gradient-button-hover': 'var(--gradient-button-hover)',
			},
			boxShadow: {
				'ps': 'var(--shadow-ps)',
				'console': 'var(--shadow-console)',
				'bull': 'var(--shadow-bull)',
				'bear': 'var(--shadow-bear)',
				'glow': 'var(--shadow-glow)',
				'neon-green': 'var(--shadow-neon-green)',
				'neon-red': 'var(--shadow-neon-red)',
			},
			fontFamily: {
				'gaming': ['Orbitron', 'monospace'],
				'pixel': ['Press Start 2P', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'ps-glow': {
					'0%, 100%': {
						boxShadow: '0 0 30px hsl(var(--ps-blue) / 0.4), inset 0 0 30px hsl(var(--ps-blue) / 0.1)'
					},
					'50%': {
						boxShadow: '0 0 60px hsl(var(--ps-blue) / 0.8), inset 0 0 30px hsl(var(--ps-blue) / 0.2)'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px currentColor, inset 0 0 20px currentColor'
					},
					'50%': {
						boxShadow: '0 0 40px currentColor, inset 0 0 40px currentColor'
					}
				},
				'button-press': {
					'0%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(0.92)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'gaming-scale': {
					'0%': {
						transform: 'scale(1) rotate(0deg)'
					},
					'50%': {
						transform: 'scale(1.05) rotate(1deg)'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-1000px 0'
					},
					'100%': {
						backgroundPosition: '1000px 0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'ps-glow': 'ps-glow 3s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'button-press': 'button-press 0.2s ease-out',
				'gaming-scale': 'gaming-scale 0.4s ease-out',
				'shimmer': 'shimmer 2s linear infinite',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
