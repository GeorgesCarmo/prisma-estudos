// npx ts-node-dev --respawn index.ts
// npx prisma db push
// npx prisma migrate dev --name init

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async ()=>{
    const pessoas = await prisma.pessoa.count();
    const enderecos = await prisma.endereco.count();
    console.log({pessoas, enderecos});
})();

/*(async ()=>{
    const pessoaComEndereco = await prisma.pessoa.create({
        data:{
            name: 'Willian',
            email: 'willian@gmail.com',
            enderecos: {
                create: {
                    rua: 'Rua de Exemplo'
                }
            }
        }
    })
})();*/

(async ()=>{
    const buscaPessoas = await prisma.pessoa.findMany({
        where:{
            name:{
                startsWith: "w",
            },
        },
    });
    console.log(buscaPessoas)
})();

(async ()=>{
    const pessoas = await prisma.pessoa.findMany({
        select: {
            id: true,
            email: true,
            name: true,
            enderecos: true,
        },
    });
    console.log(pessoas)
})();


