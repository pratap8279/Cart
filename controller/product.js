const fs = require('fs')
const model = require('../model/ProductModel')
const { default: mongoose } = require('mongoose')

const Product = model.product


exports.patchProduct = async (req, res) => {
  const id = req.params.id

  try {
    const result = await Product.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    res.json(result)
  } catch (error) {
    res.status(400).send({ isAction: error })
  }


}

exports.deleteProduct =async (req, res) => {
  const id = req.params.id;
  try{
    const result= await Product.findByIdAndDelete({_id:id},req.body,{new:true})
    res.json(result)
    }catch(error){
      res.status(400).send({ ErrorAction: error })     
    }
}


exports.getProduct = async (req, res) => {

  try {
    const result = await Product.find()
    res.send(result)

  } catch (error) {
    res.status(400).send({ isAction: error })
  }

}
exports.getProductById = async (req, res) => {

  const id = req.params.id
  try {
    const result = await Product.findById(id)
    res.json(result)
  } catch (error) {
    res.status(400).send({ isAction: error })
  }

}

exports.replaceProduct = async (req, res) => {
  const id = req.params.id
  try {
    const result = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
    res.send(result)
  } catch (error) {
    res.status(400).send({ isAction: error })
  }

}

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);

  try {
    let result = await product.save()

    res.json(result)
  } catch (error) {
    res.status(400).send({ isAction: error })
  }




}

exports.updateByPut = (req, res) => {
  const id = +req.params.id
  const productIndex = productdata.findIndex((p) => p.id == id)

  const modiiedProduct = productdata.splice(productIndex, 1, { ...req.body, id: id })
  req.send(modiiedProduct)

}


