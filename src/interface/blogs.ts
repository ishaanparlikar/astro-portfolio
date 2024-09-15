import { z } from "astro:content";

const BlogsSchema = z.object({
  attributes: z.object({
    title: z.string(),
    content: z.string(),
    createdAt: z.date(),
    publishedAt: z.string().date(),
    updatedAt: z.date(),
  }),
});

export type BlogsType = z.infer<typeof BlogsSchema>;
