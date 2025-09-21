import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const products = JSON.parse(localStorage.getItem("product")) || [];
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center text-muted py-5">
        Không tìm thấy sản phẩm!
      </div>
    );
  }

  return (
    <>
      <Container>
        <Row className='mt-4'>
          <Col md={6} className="mb-4 mb-md-0 text-center">
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </Card>
          </Col>
          <Col md={6}>
            <p>id: {product.id}</p>
            <p>ProductName: {product.name}</p>
            <p className="d-flex justify-content-start">
              Price: {product.price} VND
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
