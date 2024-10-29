import { z } from "zod";

const ExperienceSchema = z.object({
  id: z.number(),
  data: z.object({
    company_name: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    role: z.string(),
    description: z.string(),
  }),
  body: z.string(),
});

export default ExperienceSchema;
export type ExperienceType = z.infer<typeof ExperienceSchema>;
