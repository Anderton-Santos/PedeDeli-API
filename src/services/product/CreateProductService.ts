import prismaClient from "../../prisma";

interface ProductRequest{
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
    type: "retirada" | "encomenda";
}

class CreateProductService{
    async execute({name, price, description, banner, category_id, type}:ProductRequest){

        const product = await prismaClient.product.create({
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
                type,
            }
        })
        return product
    }
}

export {CreateProductService}