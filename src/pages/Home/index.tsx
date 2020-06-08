import React, { useEffect, useState } from "react";
import ListFilms from "./../../components/ListFilms";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Film } from "./../../models/film";
import { connect } from "react-redux";
import { fetchData } from './../../data/actions/filmsActions';
import InfiniteScroll from "react-infinite-scroller";
import "./styles.scss";

function Home({ list, s, page, isLoaded, error, fetchData, totalResults }: any): JSX.Element {

  useEffect(() => {
    fetchData(s, page);
  }, [s, page]);

  
  if (error) {
    return <div><p>Error: {error.message}</p></div>;

  } else if (!list || list.length === 0) {
    return <p>No se encontraron resultados</p>
  }
  else {
    return (
      <>
        {/* <InfiniteScroll
          pageStart={0}
          loadMore={handleLoadMore}
          hasMore={false}
          loader={
            <div key={1}>
              <Spinner animation="grow" variant="primary" />
              <p>
                Cargando...
           </p>
            </div>
          }
        > */}
        {!isLoaded && (<div key={1}>
          <Spinner animation="grow" variant="primary" />
          <p>
            Cargando...
            </p>
        </div>)}

        <ListFilms films={list} key={2} />
        {/* </InfiniteScroll> */}

      </>)
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    s: state.listFilmState.s,
    page: state.listFilmState.page,
    list: state.listFilmState.list,
    isLoaded: state.listFilmState.isLoaded,
    error: state.listFilmState.error,
    totalResults: state.listFilmState.totalResults
  };
};

export default connect(mapStateToProps, { fetchData })(Home);