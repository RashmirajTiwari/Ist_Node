const path=require('path');
const Products=require('../models/product')
const rootDir=require('../util/path');

exports.getAddProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    
}
exports.postAddProducts=(req,res,next)=>{
    const product=new Products(req.body.title);
    product.save();
    //console.log(req.body);
    res.redirect('/');
    
}
exports.getProducts=(req,res,next)=>{
    Products.fetchAll(products=>{
        console.log(products);
    });
    
    
    res.sendFile(path.join(rootDir,'views','shop.html'))

}