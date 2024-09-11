import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){

}

main()
.then( async () => {
    prisma.$disconnect()
})
.catch((e)=> {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
})
