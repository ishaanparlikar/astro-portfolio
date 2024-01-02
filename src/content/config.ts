import { defineCollection, z } from "astro:content";

const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    image: z.string().optional(),
    description: z.string(),
  }),
});

const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    companyName: z.string(),
    position: z.string(),
    from: z.string().nullable(),
    to: z.string().nullable(),
    icons: z.array(z.string()).optional()
  }),
});

export const collections = {
  about: aboutCollection,
  work: workCollection,
};
