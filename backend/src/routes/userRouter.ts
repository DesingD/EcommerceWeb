import { Router } from 'express';
import { getAllUsers, aggUser, deletedUser, editedUser, getUserByIdC } from '../controllers/userController';

const router = Router();

// Define routes
router.get('/', getAllUsers); 

router.get('/:id', (req, res) => {
    getUserByIdC(req, res);
});

router.post('/agg', (req, res) => {
    aggUser(req, res);
}); 

router.delete('/:id', (req, res) => {
    deletedUser(req, res);
});

router.put('/:id', (req, res) => {
    editedUser(req, res);
});



export default router;