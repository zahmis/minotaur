import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <>
    <Container className="login">
      <Row>
        <Col className="text-center">
          <h2>ログイン</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className="col-6 offset-3">
            <Form.Group>
              <Form.Control type="text" name="id" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" name="password" />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="submit"
                name="submit"
                value="ログイン"
                className="btn btn-primary"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
}
