import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { fetchData } from './../../data/actions/filmsActions';
import Button from "react-bootstrap/Button";
import "./styles.scss";


function ContentTop({ fetchData }: any): JSX.Element {
  const [search, setSearch] = useState('');
  const onKeyPress = (e: any): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchData(search, 1);
    }
  };

  return (
    <Row className="align-middle">
      <Col xs={12} lg={"auto"}>
        <h1 className="logo">FilmSearch</h1>
      </Col >

      <Col xs={12} lg={6}>
        <Form className="content-top__form">
          <Row className="align-middle" noGutters={true}>
            <Col xs={8}>
              <Form.Control size="lg" type="text" value={search} placeholder="Buscar película" onChange={(e) => { setSearch(e.target.value) }} onKeyPress={onKeyPress} />
            </Col>
            <Col xs={4}>
              <Button size="lg"
                onClick={() => {
                  fetchData(search, 1)
                }}>Buscar</Button>
            </Col >
          </Row>
        </Form>
      </Col>

    </Row>
  )
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    s: state.listFilmState.s,
    page: state.listFilmState.page,
  };
};

export default connect(mapStateToProps, { fetchData })(ContentTop);
