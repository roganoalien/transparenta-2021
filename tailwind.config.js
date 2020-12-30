module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js', './layout/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'Arial', 'sans-serif']
		},
		extend: {
			boxShadow: {
				transparenta: '15px 15px 0 0 rgba(72, 77, 81, 1)',
				transparentaSmall: '8px 8px 0 0 rgba(72, 77, 81, 1)'
			},
			colors: {
				black: '#484d51',
				main: '#89A4A9',
				white: '#F2F2F2'
			},
			fontFamily: {
				sans: ['Mon']
			},
			padding: {
				35: '35px'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
