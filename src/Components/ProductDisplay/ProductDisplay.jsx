import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-prices-rate">
                    <div className="productdisplay-right-stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                        <div className="productdisplay-right-price-new">${product.new_price}</div>
                    </div>
                </div>

                <div className="productdisplay-right-description">
                    Stay cool and confident in this soft, breathable cotton t-shirt. Designed for everyday comfort, it features a relaxed fit and durable stitching that keeps its shape wash after wash. Perfect for pairing with jeans, shorts, or joggers for a laid-back, stylish look.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <div key={size}
                                onClick={() => handleSizeClick(size)}
                                className={selectedSize === size ? "selected" : ""}>{size}</div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => { addToCart(product.id) }}
                    disabled={!selectedSize}>{selectedSize ? "ADD TO CART" : "SELECT SIZE TO ADD"}</button>
                <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
