import express from 'express'
import { createProduct, deleteProduct, getProduct } from '../controllers/productController.js'

const router = express.Router()

router.route('/')
    .get(getProduct)
    .post(createProduct)
router.route('/:id')
.delete(deleteProduct)

export default router