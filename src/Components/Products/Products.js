import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

import { products } from './seed'

const Products = () => {
   return (
      <Container>
         <Row>
            {products.map(product => (
               <Col key={product.id}>
                  <ProductCard product={product} />
               </Col>
            ))}
         </Row>
         
      </Container>
   );
}

export default Products;
