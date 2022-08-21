import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        // console.log('savedcart', savedCart)
        const keys = Object.keys(savedCart);
        fetch('http://localhost:5000/adventures/byKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(services => {
                // console.log(services);
                if (services.length) {
                    const storedCart = [];
                    for (const key in savedCart) {
                        const addedProduct = services.find(product => product.key === key);
                        if (addedProduct) {
                            // set quantity
                            const quantity = savedCart[key];
                            addedProduct.quantity = quantity;
                            storedCart.push(addedProduct);
                        }
                    }
                    setCart(storedCart);
                }
            })


    }, []);

    return [cart, setCart];
}

export default useCart;