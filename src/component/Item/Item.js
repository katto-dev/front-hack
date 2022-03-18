import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, title, img, stock }) => {
  return (
    <Card className="cardContainer bgn-primary">
      
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={`/licencias/${id}`}>
          <Button className="bton bton-primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
