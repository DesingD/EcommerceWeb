import { Router } from 'express';
import { getAllProduct, aggProduct, deletedProduct, editedProduct, getProductByIdP } from '../controllers/productController';
import multer from 'multer';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() }); // Configure multer for file uploads

// Define routes
router.get('/', getAllProduct);

router.get('/:id', (req, res) => {
    getProductByIdP(req, res);
});

router.post('/add', upload.single('images'), (req, res) => {
    aggProduct(req, res)
})

router.delete('/:id', (req, res) => {
    deletedProduct(req, res);
});

router.put('/:id', (req, res) => {
    editedProduct(req, res);
});

export default router;