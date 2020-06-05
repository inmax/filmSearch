import React from "react";
import ItemFilms from "./../../components/ItemFilm"
//import ItemFilms from "components/ItemFilm"
import "./styles.scss";

const mockData = {
  id: "tt0119177",
  title: "Gattaca",
  year: "1997",
  director: "Andrew Niccol",
  writer: "Andrew Niccol",
  actors: "Ethan Hawke, Uma Thurman, Gore Vidal, Xander Berkeley",
  plot: "In the not-too-distant future, a less-than-perfect man wants to travel to the stars. Society has categorized Vincent Freeman as less than suitable given his genetic make-up and he has become one of the.",
  poster: "https://m.media-amazon.com/images/M/MV5BNDQxOTc0MzMtZmRlOS00OWQ5LWI2ZDctOTAwNmMwOTYxYzlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "Ratings": [
    {
      source: "Internet Movie Database",
      value: "7.8/10"
    },
    {
      source: "Rotten Tomatoes",
      values: "81%"
    },
    {
      source: "Metacritic",
      value: "64/100"
    }
  ]


}
function Home() {
  return (
    <>
      <ItemFilms film={mockData} addFav={()=>"ewewewe"}/>
      <ItemFilms film={mockData} addFav={()=>"ewewewe"}/>
    </>)
}
export default Home;