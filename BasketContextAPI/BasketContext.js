import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export function useBasket() {
    return useContext(BasketContext);
}

export function BasketProvider({ children }) {
    const [products, setProducts] = useState([
        { key: '1', type: 'Vegetable', name: 'Apple', price: '10.00', image: require('../assets/images/Image101.png'), sl: 0 },
        { key: '2', type: 'Vegetable', name: 'Pear', price: '12.00', image: require('../assets/images/Image102.png'), sl: 0 },
        { key: '3', type: 'Vegetable', name: 'Apricot', price: '9.00', image: require('../assets/images/Image103.png'), sl: 0 },
        { key: '4', type: 'Vegetable', name: 'Coconut', price: '20.00', image: require('../assets/images/Image105.png'), sl: 0 },
        { key: '5', type: 'Vegetable', name: 'Orange', price: '11.00', image: require('../assets/images/Image106.png'), sl: 0 },
        { key: '6', type: 'Vegetable', name: 'Avocado', price: '12.00', image: require('../assets/images/Image107.png'), sl: 0 },
        { key: '7', type: 'Seafood', name: 'Crab', price: '28.00', image: require('../assets/images/crab.jpg'), sl: 0 },
        { key: '8', type: 'Seafood', name: 'Crayfish', price: '29.00', image: require('../assets/images/crayfish.jpg'), sl: 0 },
        { key: '9', type: 'Seafood', name: 'Oyster', price: '30.00', image: require('../assets/images/oyster.jpg'), sl: 0 },
        { key: '10', type: 'Seafood', name: 'Shrimp', price: '32.00', image: require('../assets/images/shrimp.jpg'), sl: 0 },
        { key: '11', type: 'Seafood', name: 'Tuna', price: '27.00', image: require('../assets/images/tuna.jpg'), sl: 0 },
        { key: '12', type: 'Drinks', name: 'Orange Juice', price: '5.00', image: require('../assets/images/orange_juice.jpg'), sl: 0 },
        { key: '13', type: 'Drinks', name: 'Apple Juice', price: '6.00', image: require('../assets/images/apple_juice.jpg'), sl: 0 },
        { key: '14', type: 'Drinks', name: 'Strawberry Juice', price: '6.00', image: require('../assets/images/strawberry_juice.jpg'), sl: 0 },
        { key: '15', type: 'Drinks', name: 'Tomato Juice', price: '4.00', image: require('../assets/images/tomato_juice.jpg'), sl: 0 },
        { key: '16', type: 'Drinks', name: 'Grape Juice', price: '9.00', image: require('../assets/images/grape_juice.jpg'), sl: 0 },
    ]);

    const updateQuantity = (key) => {
        setProducts(prevProducts => prevProducts.map(product => 
            product.key === key ? { ...product, sl: product.sl + 1 } : product
        ));
    };

    const decrementQuantity = (key) => {
        setProducts(prevProducts => prevProducts.map(product => 
            product.key === key ? { ...product, sl: Math.max(0, product.sl - 1) } : product
        ));
    };
    
    const resetQuantities = () => {
        setProducts(prevProducts => prevProducts.map(product => 
            ({ ...product, sl: 0 })
        ));
    };

    return (
        <BasketContext.Provider value={{ products, updateQuantity, resetQuantities, decrementQuantity }}>
            {children}
        </BasketContext.Provider>
    );

}
