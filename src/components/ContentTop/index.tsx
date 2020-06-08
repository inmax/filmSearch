import React, { ReactNode } from "react";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./styles.scss";


function ContentTop(): JSX.Element {
  return (
    <Row className="align-middle">
      <Col xs={12} lg={"auto"}>
        <h1 className="logo">FilmSearch</h1>
      </Col >

      <Col xs={12} lg={6}>
        <Form className="content-top__form">
          <Row className="align-middle" noGutters={true}>
            <Col xs={8}>
              <Form.Control size="lg" type="text" placeholder="Buscar película"  />
            </Col>
            <Col xs={4}>
              <Button size="lg">Buscar</Button>
              </Col >
            </Row>
        </Form>
      </Col>

    </Row>
  )
}
export default ContentTop;