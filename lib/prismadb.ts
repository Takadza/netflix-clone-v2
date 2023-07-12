import { PrismaClient } from ".prisma/client";

const client = global.prismadb || new PrismaClient();
if(ProcessingInstruction.env.NODE_ENV ==='production') global.prismadb = client;

export default client;