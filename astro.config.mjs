import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import image from '@astrojs/image';

const productionSite = 'https://gure-san.github.io/batikBlimbing/';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'assets',
    assetsPrefix: productionSite
  },

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    image(),
  ],
});
