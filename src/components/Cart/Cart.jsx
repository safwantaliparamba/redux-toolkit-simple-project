import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartTotal = useSelector((state) => state.cart.totalAmount);
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <h2>Total cart value  {cartTotal} </h2>
            <ul>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={{
                            id:item.id,
                            title:item.name,
                            quantity: +item.quantity,
                            total: +item.totalPrice,
                            price: +item.price,
                        }}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Cart;
