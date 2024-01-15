import { z } from "zod";

const schema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
});

export default schema;
