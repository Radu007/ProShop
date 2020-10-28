import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/product.model.js'

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @acces Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
  })
)

// @desc Fetch single product
// @route GET /:id''
// @acces Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
