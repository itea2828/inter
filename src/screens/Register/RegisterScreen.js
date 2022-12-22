import { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch } from "react-redux";
import axios from "axios";
import { setIsAuthenticated } from "../../slices/persSlice";
import { useNavigate, useParams } from "react-router-dom";



export default function Registercreen() {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [email, setEmail] = useState('+7') 
  const [password, setPassword] = useState('')

  const { whois } = useParams();

  console.log('whois', whois)

  const [phoneError, setPhoneError] = useState('')
  const [passError, setPassError] = useState('')

  useEffect(() => {
    if (email.startsWith('+7')) {
      setPhoneError('')
    } else {
      setPhoneError('Код страны не верный, +7')
    }

    if (password?.length < 6) {
      setPassError('Пароль не менее 6 символов')
    } else {
      setPassError('')
    }
  
  }, [email, password])


  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  

  const doLogin = async () => {
    setLoading(true)
    const response = await axios.post(`https://intercity-taxi.kz/api/v1/users/register/`, {
       "username": email, 
       "password": password,
       "whois": whois
     }).then(res => {
      
       console.log('res.data Login = ', res.data)
       localStorage.setItem("token", res.data.token)
       dispatch(setIsAuthenticated(true))
       
       navigate("/")
       setLoading(false)
       setErrors(null)
     }).catch(err => {
        setLoading(false)
        setErrors(err.message)
        console.log(`Login actions err ==`, err)
    })
  }

  console.log('email', email)
  console.log('password', password)

  const handleChange = (e) => {
    e.preventDefault();
  };



  return (
    <Container fluid center className="Me">
      <Row>
        <Col>

          <h3 style={{color: '#fff', marginTop: 60, marginBottom:30, fontWeight: '700' }}>Реферальная система</h3>
          <p style={{color: '#fff', fontWeight: '700', }}>Для участия</p>
          <p style={{color: '#fff', fontWeight: '700', marginTop: -10, }}>в реферальной системе</p>
          <p style={{color: '#fff', marginTop: -10, fontWeight: '700', marginBottom:30,}}>пройдите регистрацию</p>
          
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" value={email} placeholder="Номер тефона" onChange={(e) => setEmail(e.target.value)} onPaste={handleChange} />
                {phoneError === '' ? null :
                <Form.Text style={{color: 'orange'}}>
                  {phoneError}
                </Form.Text>
                }
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Укажите пароль" onChange={(e) => setPassword(e.target.value)} />
                {passError === '' ? null :
                <Form.Text style={{color: 'orange'}}>
                  {passError}
                </Form.Text>
                }
              </Form.Group>
             
              <Form.Group>
                {errors === null ? null :
                  <Form.Text style={{color: 'orange'}}>
                    {errors}
                  </Form.Text>
                }
              </Form.Group>
              {phoneError === '' ?
              <Button 
                variant="success" 
                type="submit" 
                style={{width: 306, marginTop: 10}}
                disabled={loading}
                onClick={doLogin}

              >
                Зарегистрироваться
              </Button>
              :
              <Button 
                variant="success" 
                type="submit" 
                style={{width: 306, marginTop: 10}}
                disabled={true}
              >
                Зарегистрироваться
              </Button>
              }
            </Form>
          </div>
        </Col>
      </Row>
    </Container>

  )
}
