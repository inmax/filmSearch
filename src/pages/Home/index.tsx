import React, { useEffect, useState } from "react";
import ListFilms from "./../../components/ListFilms";
//import ItemFilms from "components/ItemFilm"
import Spinner from  "react-bootstrap/Spinner";
import { Film } from "./../../models/film";
import { mockData } from "./mockdata"
import axios from "axios";
import "./styles.scss";

function Home(): JSX.Element {
  const api_key = process.env.OMDB_SECRET_KEY;
  const PAGE="1";
  const SEARCH="*the*";
  const url = `https://www.omdbapi.com/?apikey=${api_key}&s=${SEARCH}&type=movie&plot=short&page=${PAGE}`;

  const [items, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const parseObj = (obj:any) => {
   return Object.entries(obj).reduce((a: any, [key, value]) => {
      a[key.toLowerCase()] = value;
      return a;
    }, {})
  };

  useEffect(() => {
    setIsLoaded(true);
    axios
        .get(
          url
        )
        .then(
          ({ data }) => {
            const parseData = data.Search.map((film: {}) => {
              return parseObj(film)
            });
            const newFilms = [...parseData, ...items];
         
            setFilms(newFilms);
          }
        )
        .catch((error) => {
          setIsLoaded(true);
          setError(error);
        });
      
    
  }, []);

  if (error) {
    return <div><p>Error: {error.message}</p></div>;
  } else if (!isLoaded) {
    return <>
      <Spinner animation="grow" variant="primary" />
      <p>
        Cargando...
     </p> 
    </>;
  } else if(items.length===0){
    return <p>No se encontraron resultados</p>
  } 
  else{
    return (
      <>
        <ListFilms films={items} />
      </>)
  }
}
export default Home;