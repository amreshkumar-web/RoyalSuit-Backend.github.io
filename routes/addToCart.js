const express = require('express');
const auth = require('../middlewares/auth');
const {addCart , getCartProduct,cartDelete,getAllProducts} = require('../controller/addToCart'); 
const router = express.Router();

router.put('/cartAdd/:id', auth, addCart);
router.get('/getCartP' , auth , getCartProduct)
router.put('/cartDelete/:id',auth,cartDelete)
router.get('/allProduct',getAllProducts)

module.exports = router;
