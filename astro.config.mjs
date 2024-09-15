import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  image: {
    domains: ["172.16.0.2"],
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    // icon()
  ],
});
