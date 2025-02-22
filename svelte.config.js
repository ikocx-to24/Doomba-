import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess({
		typescript: true,
	}),

	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/', // Ensure this alias is set
		},
		//Starget: '#svelte',
	}
};

export default config;
