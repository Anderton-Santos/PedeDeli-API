import prismaClient from "../../prisma";

class ListCategoryService {
  async execute() {
    const categories = await prismaClient.category.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return categories;
  }
}

export { ListCategoryService };
