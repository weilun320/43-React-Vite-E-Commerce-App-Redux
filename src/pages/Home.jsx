import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/Item";

const items = [
  { id: 1, name: "Pen", description: "It's a pen", price: "RM10" },
  { id: 2, name: "Laptop", description: "I think it's a laptop", price: "RM1200" },
  { id: 3, name: "iPhone 2", description: "Might be iPhone 3", price: "RM30" },
  { id: 4, name: "Gaming Laptop", description: "A gaming laptop", price: "RM2200" },
  { id: 5, name: "Macbook Air", description: "A Macbook in the air", price: "RM2000" },
  { id: 6, name: "Corsair Gaming Mouse", description: "Is it a mouse?", price: "RM40" },
  { id: 7, name: "Logitech Keyboard", description: "Very loud", price: "RM50" },
  { id: 8, name: "iPad Pro", description: "iPad but Pro version", price: "RM1400" },
];

export default function Home() {
  return (
    <Container className="my-4">
      <Row>
        {items.map((item) => (
          <Col className="mb-3" key={item.id} md={3}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
