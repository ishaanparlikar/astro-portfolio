import { z } from "astro:content";

export const BlogsSchema = z.object({
  title: z.string(),
  createdAt: z.string(),
  publishedAt: z.string(),
  updatedAt: z.string(),
});

export type BlogsType = z.infer<typeof BlogsSchema>;
