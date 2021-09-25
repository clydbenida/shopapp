import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'


const ProductCard = ({product}) => {
   const { productImage, productName, price } = product
   return (
      <Card>
         <Card.Img variant='top' src={productImage} />
         <Card.Body>
            <Row>
               <Col><Card.Title>{productName}</Card.Title></Col>
               <Col><span className='text-muted'>{price}</span></Col>
            </Row>
            <button className='btn btn-primary'>Add to Cart</button>
         </Card.Body>
      </Card>
   );
}

export default ProductCard;
