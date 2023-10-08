const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("DataBase Connected")

}

const ProductSchema=new Schema({

  
  title: {type: String,  required:true},
  description:  String,
  price: {type: Number,  required:true},
  discountPercentage:{type:Number,  min:[0,"Discount is  not less then 0"], max:[50 ,"Discount is not greater than 50 "]},
  rating: {type: Number, min:[2,"Wrong ratiog"] , max:[5,"Wrong ration"]},
  stock: String,
  brand:  {type: String},
  category:  {type: String,  required:true},
  thumbnail: {type: String,  required:true},
  images: [String]
})


exports.product =mongoose.model('products', ProductSchema)