import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryPublicController {
  async handle(req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();

    try {
      const categories = await listCategoryService.execute();
      return res.json(categories);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { ListCategoryPublicController };
