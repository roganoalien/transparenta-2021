module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js', './layout/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'Arial', 'sans-serif']
		},
		extend: {
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
