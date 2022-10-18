/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				white: '#ffffff',
			},
		},
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			syne: ['Syne', 'sans-serif'],
		},
		letterSpacing: {
			normal: '0.01em',
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
  },
  plugins: [],
}
