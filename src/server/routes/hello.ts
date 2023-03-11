import { publicProcedure } from "../context";

export const helloRouter = publicProcedure.query(() => 'hello from the hello route');
