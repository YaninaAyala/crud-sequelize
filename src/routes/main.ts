import { Router } from 'express';
import DB from '../controllers/database';

const router = Router();

router.get('/api', DB.testConnection);

export default router;
