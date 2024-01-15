import { z } from "zod";

const schema = z.object({
  description: z.string().min(2),
});

export default schema;
