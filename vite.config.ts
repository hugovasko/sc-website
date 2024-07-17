import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { base } from '$app/paths';

export default defineConfig({
  plugins: [sveltekit()],
  base: base,
});
