import React from "react";
import "./styles.scss";
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
//import { Link } from 'react-router-dom';
import { RiHeartAddLine } from "react-icons/ri";
import { Film } from "./../../models/film";

interface PropsItemFilms {
  film: Film
  addFav: () => string
}

function ItemFilm({ film, addFav }: PropsItemFilms): JSX.Element {
  return (

      <article className="item-film">
        {/* <Link></Link> */}
        <header>
          <h4 className="item-film__title">{film.title}</h4>
          <h5>{film.director}</h5>
          <p>1997</p>
        </header>
        <figure>
          <img src={film.poster} title={film.title} />
        </figure>

        {film.plot && (<div className="item-film__excerpt">
          <p>
            {film.plot}
          </p>
        </div>)}

        <footer className="item-film__footer">
          <Button onClick={addFav} title="Añadir a favoritos" className="item-film__adding-fav" ><RiHeartAddLine color="#fff" fill="#fff" /></Button>
        </footer>
      </article>
 

  )
}
export default ItemFilm;