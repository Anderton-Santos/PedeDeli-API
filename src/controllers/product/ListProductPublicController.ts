import { Request, Response } from "express";
import { ListProductPublicService } from "../../services/product/ListProductPublicService";

class ListProductPublicController {
    async handle(req: Request, res: Response) {
        const {categoryName} = req.params
        
        const listProductPublicService = new ListProductPublicService();
        

        try{
            const list = await listProductPublicService.execute(
                {categoryName}
            );

        return res.json(list);
        } catch (error){
            return res.status(400).json({ error: error.message})
        }
    }
}

export { ListProductPublicController };



