import { Router } from 'express';
import { getAllUsers,  deletedUser, editedUser, getUserByIdC } from '../controllers/userController';
import { validateEmailMiddleware } from '../middlewares/validateEmail';

const router = Router();

// Define routes
router.get('/', getAllUsers); 

router.get('/:id', (req, res) => {
    getUserByIdC(req, res);
});


router.delete('/:id', (req, res) => {
    deletedUser(req, res);
});

router.put('/:id', (req, res) => {
    editedUser(req, res);
});



export default router;