import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";
import { Button, Card } from "react-bootstrap";

export default function Item({ item }) {
  const dispatch = useDispatch();
  const price = parseInt(item.price.substring(2));

  function addItem() {
    return dispatch(addToCart(item));
  }

  return (
    <Card>
      <Card.Img
        alt={item.name}
        src={`https://picsum.photos/id/${item.id}/200`}
        variant="top"
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
          <br />
          Price: RM {price.toFixed(2)}
        </Card.Text>
        <Button onClick={addItem} variant="primary">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
