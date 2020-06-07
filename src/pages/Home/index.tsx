import React, { useEffect, useState } from "react";
import ListFilms from "./../../components/ListFilms";
import Spinner from "react-bootstrap/Spinner";
import { Film } from "./../../models/film";
import { connect } from "react-redux";
import axios from "axios";
import { store_all } from './../../data/actions/filmsActions';
import "./styles.scss";

function Home({ list, s, page, isLoaded, error, store_all }: any): JSX.Element {
  const api_key: string = process.env.OMDB_SECRET_KEY;
  const url: string = `http://www.omdbapi.com/?apikey=${api_key}&s=${s}&type=movie&plot=short&page=${page}`;

  const parseObj = (obj: any) => {
    return Object.entries(obj).reduce((a: any, [key, value]) => {
      a[key.toLowerCase()] = value;
      return a;
    }, {})
  };

  useEffect(() => {
    store_all({isLoaded:false});
    axios
      .get(
        url
      )
      .then(
        ({ data }) => {
          const parseData = data.Search.map((film: {}) => {
            return parseObj(film)
          });
          store_all({
            list: [...parseData],
            isLoaded:true
          });
        }
      )
      .catch((error) => {
        store_all({isLoaded:true, error:error});
      });
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
  } else if (list.length === 0) {
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

export default connect(mapStateToProps, { store_all })(Home);