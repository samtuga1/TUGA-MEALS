import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", price: 12.99, amount: 2 }].map((cart) => (
        <li>{cart.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div></div>
      <div></div>
    </div>
  );
};

export default Cart;
