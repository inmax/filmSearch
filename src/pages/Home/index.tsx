import React, { useEffect, useState } from "react";
import ListFilms from "./../../components/ListFilms";
import Spinner from "react-bootstrap/Spinner";
import { Film } from "./../../models/film";
import { connect } from "react-redux";
import { fetchData} from './../../data/actions/filmsActions';
import "./styles.scss";

function Home({ list, s, page, isLoaded, error,fetchData }: any): JSX.Element {

  useEffect(() => {
      fetchData(s, page);
  }, [s,page]);

  if (error) {
    return <div><p>Error: {error.message}</p></div>;
  } else if (!isLoaded) {
    return <>
      <Spinner animation="grow" variant="primary" />
      <p>
        Cargando...
     </p>
    </>;
  } else if (!list || list.length === 0) {
    return <p>No se encontraron resultados</p>
  }
  else {
    return (
      <>
        <ListFilms films={list} />
      </>)
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    s: state.listFilmState.s,
    page: state.listFilmState.page,
    list: state.listFilmState.list,
    isLoaded: state.listFilmState.isLoaded,
    error: state.listFilmState.error
  };
};

export default connect(mapStateToProps, { fetchData })(Home);