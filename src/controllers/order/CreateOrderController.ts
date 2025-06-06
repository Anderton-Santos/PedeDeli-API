import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController{
    async handle(req: Request, res: Response){
        const { name, delivery_type, delivery_date, observation, items } = req.body;

        const createOrderController = new CreateOrderService()

        const order = await createOrderController.execute({
      name,
      delivery_type,
      delivery_date,
      observation,
      items
    })

        res.json(order)

    }
}

export {CreateOrderController}