import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UseRequest{
    name: string;
    email: string;
    password: string
}

class CreateUserService{
    async execute({name, email, password}: UseRequest){
        
        if(!email){
            throw new Error("Email incorect")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Use already exists")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name:name,
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }
}

export {CreateUserService}