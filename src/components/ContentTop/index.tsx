import React, { ReactNode } from "react";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./styles.scss";


function ContentTop(): JSX.Element {
  return (
    <Row>
      <Col xs={12} lg={"auto"}>
        <h1 className="logo">FilmSearch</h1>
      </Col >

      <Col xs={12} lg={6}>
        <Form>
          <Row className="align-middle">
            <Col>
              <Form.Control type="text" placeholder="Search" size="lg" />
            </Col>
            <Col>
              <Button variant="outline-success">Search</Button>
              </Col >
            </Row>
        </Form>
      </Col>

    </Row>
  )
}
export default ContentTop;