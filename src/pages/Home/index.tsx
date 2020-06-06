import React from "react";
import ListFilms from "./../../components/ListFilms";
//import ItemFilms from "components/ItemFilm"
import "./styles.scss";
import {mockData} from "./mockdata"


function Home():JSX.Element {
  return (
    <>
      <ListFilms films={mockData} />
    </>)
}
export default Home;