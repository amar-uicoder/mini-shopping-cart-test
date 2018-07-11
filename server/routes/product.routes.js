import { Router } from 'express';
// import controller file
import * as productController from '../controllers/product.controller';

// Get an instance of express router
const router = new Router();

router.route('/')
  .get(productController.getProducts);

router.route('/:id')
  .get(productController.getProduct);

export default router;



