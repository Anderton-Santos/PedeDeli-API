import prismaClient from "../../prisma";

class ListProductPublicService{
    async execute({ categoryName }: { categoryName: string })
{
        const category = await prismaClient.category.findFirst({
            where:{
                name:{
                    equals: categoryName,
                    mode: "insensitive"
                }
            }
        })

        if (!category) {
            throw new Error("Categoria não encontrada")
        }

        const products = await prismaClient.product.findMany({
            where:{
                category_id: category.id
            },
            orderBy: {
                created_at: "desc"
            }
        })

        return products

    }
}

export {ListProductPublicService}




