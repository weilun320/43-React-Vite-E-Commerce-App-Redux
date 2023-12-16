import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addOneQuantity, minusOneQuantity, removeFromCart } from "../feature/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const price = parseInt(item.price.substring(2));

  function removeItem() {
    return dispatch(removeFromCart(item));
  }

  function addQuantity() {
    return dispatch(addOneQuantity(item));
  }

  function minusQuantity() {
    return dispatch(minusOneQuantity(item));
  }

  return (
    <Card className="mb-2">
      <Card.Body>
        <Row>
          <Col xs={4} md={2}>
            <Card.Img
              alt={item.name}
              className="rounded-0"
              src={`https://picsum.photos/id/${item.id}/200`}
              variant="top"
            />
          </Col>
          <Col xs={8} md={6}>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text className="fw-semibold">RM {price.toFixed(2)}</Card.Text>
            <Card.Text
              as={Button}
              className="text-danger"
              onClick={removeItem}
              variant="light"
            >
              Remove
            </Card.Text>
          </Col>
          <Col xs={12} className="text-end mt-3 mt-sm-0">
            <Button className="border text-dark" onClick={minusQuantity} variant="outline-light">
              <i className="bi bi-dash"></i>
            </Button>
            <span className="px-3 py-2">{item.amount}</span>
            <Button className="border text-dark" onClick={addQuantity} variant="outline-light">
              <i className="bi bi-plus"></i>
            </Button>
            <span className="text-danger ms-3 fw-bold">
              RM {(price * item.amount).toFixed(2)}
            </span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
