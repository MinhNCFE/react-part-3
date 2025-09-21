import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Product({product}) {
  return (
    <>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" style={{ height: "200px", width: "100%", objectFit: "cover"}} src={product.image} />
        <Card.Body className="text-center">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text >
            {product.price} VND
          </Card.Text>
          <Button as={Link} to={`/product/${product.id}`} variant="primary">Xem chi tiết</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
