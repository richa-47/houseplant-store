import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalItems = useSelector(state => state.cart.totalItems);
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: 10 }}>
      <div>
        <Link to="/products">Products</Link> | 
        <Link to="/cart"> Cart ({totalItems})</Link>
      </div>
    </header>
  );
}
