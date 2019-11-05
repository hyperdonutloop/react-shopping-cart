import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './Contexts/ProductContext';
import { CartContext } from './Contexts/CartContext';

// Components


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart( [...cart, item] );
			// add the given item to the cart - Step 1: Add item functionality ✅
		//when addItem is passed a new item object, the cart state is updated so it includes the previous state (the items, if any, in the cart) and the new item.
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart }}>
				<div className="App">
					<Navigation />
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;

//Completed Step #3 ✅
//Lines 27-34 are BEFORE, line 36 is the refactored version