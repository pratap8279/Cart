const express = require('express')

const Router=express.Router()
const ProductController=require('../controller/product')


Router
.post('/postData', ProductController.createProduct)
.put('/:id', ProductController.replaceProduct)
.get('/', ProductController.getProduct)
.get('/:id', ProductController.getProductById)
.patch('/:id', ProductController.patchProduct)
.put('/:id', ProductController.updateByPut)
.delete('/:id', ProductController.deleteProduct)

exports.Routes=Router;