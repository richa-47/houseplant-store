import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, removeItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, totalItems, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>
      {cartItems.map(item => (
        <div key={item.id} style={{ borderBottom: "1px solid gray", marginBottom: 10 }}>
          <img src={item.image} alt={item.name} width="80" />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>Qty: {item.quantity}</p>
          <button onClick={() => dispatch(increase(item.id))}>+</button>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
}
