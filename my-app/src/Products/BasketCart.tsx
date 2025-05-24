import React from "react";
import { useDispatch } from "react-redux";
import { addCart, removeCart, decrementCart } from "./ProductSlice";
import type { Product } from "./Product";

interface Props {
    product: Product & { quantity: number };
}

const BasketCart: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addCart(product));
    };

    const handleDecrement = () => {
        dispatch(decrementCart(product));
    };

    const handleRemove = () => {
        dispatch(removeCart(product));
    }

    const totalPrice = (product.price * product.quantity).toFixed(2);

    return (
        <div className="modal2">
            <div>
                <div className="modal">
                    <button onClick={handleRemove} className="btn-cart2">X</button>
                    <p>{product.name}</p>
                    <img src={product.image} alt={product.name} className="img2" />
                    <p>{product.price.toFixed(2)}$</p>
                    <div className="btn-total">
                        <button onClick={handleDecrement} className="btn-incres">-</button>
                        <div className="quantity">{product.quantity}</div>
                        <button onClick={handleAdd} className="btn-decres">+</button>
                    </div>
                    <p>{totalPrice}$</p>
                </div>
            </div>
            <hr/>
        </div>
    )
};

export default BasketCart;
