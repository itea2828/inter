import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';

import  Ok  from '../../assets/img/ok.png'
import Google from '../../assets/img/google.png';
import Apple from '../../assets/img/apple.png';
import Button from 'react-bootstrap/Button';

import { useDispatch } from "react-redux";
import { setIsAuthenticated } from '../../slices/persSlice';


export default function HomeScreen() {



  return (
    <Container fluid center className="Me">
      <Row>
        <Col>
          <h3 style={{color: '#fff', marginTop: 60, marginBottom:30, fontWeight: '700' }}>Вы зарегистрировались!</h3>
          <img src={Ok} alt='ok' />
          <h3 style={{color: '#fff', marginTop: 30, marginBottom:30, fontWeight: '700' }}>Увеличьте свой доход приглашая новых пользователей в InterCity</h3>
          <h5 style={{color: '#fff', marginBottom:30,}}>Скачать приложение</h5>

          <img style={{width: 140, marginRight: 5}} src={Apple} alt="Logo" />
          <img style={{width: 140, marginLeft: 5}} src={Google} alt="Logo" />

         
        </Col>
      </Row>
    </Container>

  )
}
