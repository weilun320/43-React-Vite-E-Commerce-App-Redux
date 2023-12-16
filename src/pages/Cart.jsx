import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector((state => state.cart));
  let subtotal = 0;

  cart.forEach((item) => {
    // Assume price is in the format "RMxx"
    // Now it multiplies by the amount
    subtotal += parseInt(item.price.substring(2)) * item.amount;
  });

  return (
    <Container className="my-3">
      <h2>Your Cart:</h2>
      {cart.map((item, index) => (
        <CartItem item={item} key={index} />
      ))}
      <h4 className="text-end">Subtotal: RM{subtotal.toFixed(2)}</h4>
    </Container>
  );
}
