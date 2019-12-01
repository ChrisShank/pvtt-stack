const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const autoPrefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

const plugins = [tailwindcss, autoPrefixer];

if (process.env.NODE_ENV === 'production') {
	plugins.push(purgecss({
		content: ['./src/**/*.html', './src/**/*.vue'],
		defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
	}));
	plugins.push(cssnano({ preset: 'default' }));
}

module.exports = { plugins };