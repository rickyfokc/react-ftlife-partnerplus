import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../css/LoginFormcss.css'
import swal from 'sweetalert';


async function loginUser(credentials) {
  return fetch('https://www.mecallapi.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function LoginForm() {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('accessToken' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/home";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }

  return (
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
      <div className='login'>
      <h2 className='mb-3'>Login</h2>
      <Form noValidate  onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group noValidate  onSubmit={handleSubmit} as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Account</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              onChange={e => {setUserName(e.target.value);
                }
              }
            />
            <Form.Control.Feedback>
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Username cannot be empty!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <Form.Control.Feedback>
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Password cannot be empty!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button  className="test" type="submit">Login </Button>
      </Form>
      </div>
    </div>
  );
}

export default LoginForm
