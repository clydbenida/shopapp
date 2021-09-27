import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

import Login from './Components/SignIn';
import SignUp from './Components/SignUp';

import { useAuth } from '../../Contexts/AuthContext'

const Main = () => {
   const { currentUser } = useAuth()
   const history = useHistory()

   return (
      <>
         {currentUser ? history.push('/products') : (
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
         )}
      </>
   );
}

export default Main;
