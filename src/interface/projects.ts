import { z } from "astro:content";

export const ProjectsSchema = z.object({
  title: z.string(),
  link: z.string(),
  description: z.string(),
  pills: z.array(z.string()).optional(),
});

export type ProjectsType = z.infer<typeof ProjectsSchema>;
