import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>Green Haven</h1>
      <p>Welcome to Green Haven – your one-stop shop for beautiful, fresh houseplants!</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
