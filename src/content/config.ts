import { z, defineCollection } from "astro:content";

const aboutCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  profile: aboutCollection,
};
