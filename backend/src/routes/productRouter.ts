import { Router } from 'express';
import { getAllProduct, aggProduct, deletedProduct, editedProduct, getProductByIdP } from '../controllers/productController';

const router = Router();

// Define routes
router.get('/', getAllProduct);

router.get('/:id', (req, res) => {
    getProductByIdP(req, res);
});

router.post('/agg', (req, res) => {
    aggProduct(req, res)
})

router.delete('/:id', (req, res) => {
    deletedProduct(req, res);
});

router.put('/:id', (req, res) => {
    editedProduct(req, res);
});

export default router;