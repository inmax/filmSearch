import React from "react";
import ItemFilm from "./../ItemFilm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Film } from "./../../models/film";
import "./styles.scss";

interface PropsListFilms {
  films: Film[]
}

function ListFilms({ films }: PropsListFilms): JSX.Element {
  return (
    <div className="list-films">
      <Row>
        {films.map((film, i) => 
          <Col key={i} xs={6} md={4} lg={3} xl={2}>
            <ItemFilm film={film} addFav={() => film.id} />
          </Col>
        )}
      </Row>
    </div>
  )
}
export default ListFilms;