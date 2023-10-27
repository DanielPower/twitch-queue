import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
	plugins: [basicSsl(), sveltekit()],
	server: {
		port: 8080,
		https: true
	}
});
