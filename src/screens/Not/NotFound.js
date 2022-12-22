import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';




export default function NotFound() {



  return (
    <Container fluid center className="Me">
      <Row>
        <Col>
            <h1 style={{color: '#fff', marginTop: 80, fontWeight: '700' }}>404</h1>
          <h3 style={{color: '#fff', marginTop: 20, fontWeight: '700' }}>Страница не найдена!</h3>
          
          <h4 style={{color: '#fff', marginTop: 20, fontWeight: '700' }}>Попробуйте очистить историю,</h4>
          <h4 style={{color: '#fff', marginTop: 20, fontWeight: '700' }}>кеш вашего браузера</h4>
        </Col>
      </Row>
    </Container>

  )
}
