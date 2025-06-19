import { plants } from "../assets/plants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems);

  const inCart = (id) => cart.some(item => item.id === id);

  return (
    <div>
      <h2>All Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {plants.map(plant => (
          <div key={plant.id} style={{ border: "1px solid gray", padding: 10 }}>
            <img src={plant.image} alt={plant.name} width="100" />
            <h3>{plant.name}</h3>
            <p>₹{plant.price}</p>
            <button onClick={() => dispatch(addToCart(plant))} disabled={inCart(plant.id)}>
              {inCart(plant.id) ? "In Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
