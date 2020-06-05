import React from "react";
import "./styles.scss";
//import { Link } from 'react-router-dom';
import { Film } from "./../../models/film"

interface PropsItemFilms {
  film: Film
  addFav: () => string
}

function ItemFilm({ film, addFav }: PropsItemFilms) {
  return (
    <article className={"item-film"}>
      {/* <Link></Link> */}
      <header>
        <h4>{film.title}</h4>
        <h5>{film.director}</h5>
        <p>1997</p>
      </header>
      <figure>
        <img src={film.poster} title={film.title} />
      </figure>
      <div className="excerpt">
        <p>
          {film.plot}
        </p>
      </div>
      <footer>
        <div onClick={addFav}>Favorito</div>
      </footer>
    </article>
  )
}
export default ItemFilm;