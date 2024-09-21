import { Router } from 'express';
import DB from '../controllers/database';
import productsRouter from './products';

const router = Router();

router.get('/api', DB.testConnection);
router.use("/products", productsRouter)

export default router;
