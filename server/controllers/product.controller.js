import mongoose from 'mongoose';
// import models
import Product from '../models/product.model';

/**
 * Get all products
 * @param req
 * @param res
 * @returns void
 */
export const getProducts = (req, res) => {
  Product.find().exec((err, products) => {
    if(err) {
      return res.json({'success': false, 'message': 'An error occured while getting products'});
    }
    return res.json({'success': true, 'message': 'products fetched successfully', products});
  })
}

/**
 * Get a single product
 * @param req
 * @param res
 * @returns void
 */

export const getProduct = (req, res) => {
  Product.find({_id: req.params.id})
    .exec((err, product) => {
      if(err) {
        return res.json({'success': false, 'message': 'An error occured while getting products'});
      }
      if(product.length) {
        return res.json({'success':true,'message':'Product fetched by id successfully',product});
      } else {
        return res.json({'success':false,'message':'Product with the given id not found'});
      }
    })
}

