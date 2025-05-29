import {Router} from 'express';
import { aggRole, getRoleByUser } from '../controllers/roleController';
import { validateToken } from '../middlewares/validateToken';

const router = Router();

router.post('/add', validateToken,(req, res) => {
    aggRole(req, res);
})

router.get('/:id', validateToken,(req, res) => {
    getRoleByUser(req, res);
})

export default router;