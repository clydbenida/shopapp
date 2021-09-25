import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './Components/SignIn';
import SignUp from './Components/SignUp';

const Main = () => {
   return (
      <Container className='flex-column align-items-center'>
         <Row>
            <Col className='mx-4'>
               <SignUp />
            </Col>

            <Col className='mx-4'>
               <Login />
            </Col>
         </Row>
      </Container>
   );
}

export default Main;
