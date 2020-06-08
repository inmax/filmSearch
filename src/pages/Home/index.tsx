import React, { useEffect, useState } from "react";
import ListFilms from "./../../components/ListFilms";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Film } from "./../../models/film";
import { connect } from "react-redux";
import { fetchData} from './../../data/actions/filmsActions';
import InfiniteScroll from "react-infinite-scroller";
import "./styles.scss";

function Home({ list, s, page, isLoaded, error,fetchData, totalResults }: any): JSX.Element {
  // const [pagination,setPagination]=useState(page)
  useEffect(() => {
      fetchData(s, page);
  }, [s,page]);

  const handleLoadMore = ():void=>{
   
    //loadMore();
    fetchData(s, page);
  }
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
       <InfiniteScroll
          pageStart={0}
          loadMore={handleLoadMore}
          hasMore={page*10>totalResults?false:true}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >

        <ListFilms films={list} />
        </InfiniteScroll>
        <Button onClick={()=>{ fetchData(s, page+1);}} variant="primary">Cargar Mas</Button>
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
    totalResults:state.listFilmState.totalResults
  };
};

export default connect(mapStateToProps, { fetchData })(Home);