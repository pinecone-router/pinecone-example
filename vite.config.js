import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
	plugins: [
		WindiCSS({
			scan: {
				dirs: ['.'], // all files in the cwd
				fileExtensions: ['html', 'js'],
			},
		}),
	],
	publicDir: 'public/',
});
