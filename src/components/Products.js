import React from 'react';
import { useContext } from 'react';
import ProductContext  from '../Contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {

	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;

// Step #4 ✅ - ProductContext is now providing data so now we can consume it. 
/* 
1. imported useContext and ProductContext
2. when we import 'useContext' is returning value passed by 'ProductContext.Provider' value prop. 
3. Refactor Products component by removing every instance of props.
4. Products component is getting data solely from Context API 
*/