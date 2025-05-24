import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "./ProductSlice";
import type { Product } from "./Product";


interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addCart(product))
    };

    return (
        <div style={{
            display: "flex", flexDirection: "column",
            marginLeft: "60px", marginTop: "20px"
        }}>
            <img src={product.image} alt={product.name} className="car" />
            <h3 className="productname">{product.name}</h3>
            <button onClick={handleAdd} className="add-cart">Add Cart</button>
        </div>
    )
}

export default ProductCard;