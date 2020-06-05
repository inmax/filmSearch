import React from "react";
import "./styles.scss";
import Button from 'react-bootstrap/Button';
//import { Link } from 'react-router-dom';
import { GrFavorite} from 'react-icons/gr';
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
        <div >Favorito</div>
        <Button onClick={addFav} variant="primary">Añadir a tu lista <GrFavorite /></Button>
      </footer>
    </article>
  )
}
export default ItemFilm;