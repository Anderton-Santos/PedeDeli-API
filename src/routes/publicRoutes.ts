import { Router } from 'express';
import { ListProductPublicController } from '../controllers/product/ListProductPublicController';
import { CreateOrderController } from '../controllers/order/CreateOrderController';
import { ListCategoryPublicController } from "../controllers/category/ListCategoryPublicController";
const publicRoutes = Router();

publicRoutes.get('/products/:categoryName', new ListProductPublicController().handle);
publicRoutes.post('/orders', new CreateOrderController().handle); 

publicRoutes.get('/category', new ListCategoryPublicController().handle);

export { publicRoutes };
