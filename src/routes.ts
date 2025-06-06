
import express, { Router} from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUseController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserContoller';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListProductController } from './controllers/product/ListProductControler';

// import { ListProductPublicController } from './controllers/product/ListProductPublicController';


import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer'
const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//ROTAS USER
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUseController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

//ROTAS CATEGORY

router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

//ROTAS PRODUTOS
// router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.post('/product', isAuthenticated, new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListProductController().handle)

// router.get('/category/:categoryName/product', new ListProductPublicController().handle);








export { router };
