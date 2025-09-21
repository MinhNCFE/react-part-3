import { useEffect, useState } from "react";
import {useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";

function ListProduct() {
  const product = [
    {
      id: 1,
      name: "Điện thoại Iphone 15 Pro",
      price: "30.000.000",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-1-1-750x500.jpg",
    },
    {
      id: 2,
      name: "Điện thoại OPPO Reno11 5G",
      price: "8.200.000",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/314209/oppo-reno-11-xanh-1-1-750x500.jpg",
    },
    {
      id: 3,
      name: "Điện thoại Xiaomi 15 Ultra 5G",
      price: "31.900.000",
      image:
        "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/334169/xiaomi-15-ultra-den-1-638773979675979686-750x500.jpg",
    },
    {
      id: 4,
      name: "Điện thoại SamSung S24",
      price: "18.500.000",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-1-750x500.jpg",
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("name") || "");

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, []);

  const filteredProducts = product.filter((p) =>
    p.name.toLowerCase().includes((searchParams.get("name") || "").toLowerCase())
  );

  const handleSearch = () => {
    if (search.trim() !== "") {
      setSearchParams({ name: search });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-center mt-4">List Product</h1>
        <Form className="d-flex justify-content-end">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button  onClick={handleSearch}>Tìm kiếm</Button>
            </Col>
          </Row>
        </Form>

        {filteredProducts.length === 0 ? (
            <div className="text-center text-muted py-5">Không tìm thấy sản phẩm rồi!</div>
        ) : (<Row className="mt-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={10} sm={6} md={4} lg={3} className="mb-4">
              <Product product={product} />
            </Col>
          ))}
        </Row>) }    
      </Container>
    </>
  );
}

export default ListProduct;
