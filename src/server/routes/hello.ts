import { z } from 'zod';
import { publicProcedure } from "../context";

export const helloRouter = publicProcedure
    .input(z.object({
        name: z.string().nullish()
    }))
    .query(({ input }) => {
        return { text: `hello from the ${input?.name ?? 'query fallback'}` };
    });
