import React, { useState, useContext } from 'react';
import addToCartImg from '@icons/bt_add_to_cart.svg';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';

const ProductItem = ({ product }) => {
	const { addToCart,removeFromCart } = useContext(AppContext);
	const [addedToCart,setAddedToCart] = useState(false);

	const handleAdd = item => {
		addToCart(item);
		setAddedToCart(true);
		console.log(item);
	}
	const handleRemove= item => {
		removeFromCart(item);
		setAddedToCart(false);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{!addedToCart ?
				<figure onClick={() => handleAdd(product)} >
					<img src={addToCartImg} alt="{product.name}" />
				</figure> 
				:
				<figure onClick={() => handleRemove(product)} >
					<img src={close} alt="{product.name}" />
				</figure>
				}
			</div>
		</div>
	);
}

export default ProductItem;