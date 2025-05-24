import type { Product } from "./Product";
import { useSelector } from "react-redux";
import type { RootState } from "./ProductIndex";
import ProductCard from "./ProductCard";
import "./Product.css"
import g63 from "./image/g63.jpg"
import Shin from "./image/Shin.jpg"
import { useState } from "react";
import BasketCart from "./BasketCart";
import { selectTotalPrice } from "./ProductSlice";

const products: Product[] = [
    { id: 1, name: "g63", price: 23445.222, image: g63 },
    { id: 2, name: "Shin", price: 1445, image: Shin },
];

const ProductApp: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [cart, setCart] = useState(false);
    const totalCartPrice = useSelector((state: RootState) => selectTotalPrice(state))

    const handleclick = () => {
        setCart(true);
    };

    if (cart) {
        return (
            <div className="container">
                <div className="nav-title">
                    <button className="btn-cart1">Products</button>
                    <button onClick={() => setCart(false)}
                        className="btn-cart1">Carts: {cartItems.length}
                    </button>
                </div>
                <nav className="nav-row">
                    <p>Nazvaniye</p>
                    <p>Foto</p>
                    <p>Tsena</p>
                    <p>Kolichestvo.</p>
                    <p>Obshaya tsena.</p>
                </nav>
                <div style={{marginTop: "10px", width: "830px"}}>
                    <hr />
                </div>
                {cartItems.map((product) => (
                    <BasketCart key={product.id} product={product} />
                ))}
                <div className="total-price">
                    <span>Vsego: </span>
                    <span>{totalCartPrice.toFixed(2)}</span>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className="product">
                <nav className="nav-title2">
                    <button className="btn-cart">Products</button>
                    <button onClick={handleclick}
                        className="btn-cart">Carts: {cartItems.length}
                    </button>
                </nav>
            </div>
            <div style={{ display: "flex" }}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductApp