import express from 'express'
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @acces Public
router.route('/').get(getProducts)

// @desc Fetch single product
// @route GET /:id''
// @acces Public
router.route('/:id').get(getProductById)

export default router
