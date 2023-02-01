import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './Comics.css'
import { Link } from 'react-router-dom';

function Comics() {
    const comics = useSelector((state) => state.comics)
    const [cardsComics, setCardsComics] = useState(8)
    const dispatch = useDispatch()

    function loadCardsComics () {
        setCardsComics(cardsComics + 4)
        fetchDataComics()
    }

    async function fetchDataComics() {
        const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=30&apikey=f36e8054b15f9fd7f9cdae5b06536757`);
        const data = await response.json();
        
        dispatch({
          type: "GET_COMICS",
          payload: {
            comics: data.data.results
          }
        })
      }

      useEffect(() => {
        fetchDataComics();
      }, [])

      return (
        <div className="Comics">
          <div className="wrapper">
            <div className="block-flex">
                <div className="marvel-carts">
                {comics.slice(0, cardsComics).map((item) => (
                    <div className="marvel-cart" key={item.id}>
                    <Link to={`/comics/${item.id}`} >
                    <img className="heroes-img" src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}/>
                    </Link>
                    <div className="heroes-name">{item.title}</div>
                    <div className="heroes-name">{item.prices[0].price}$</div>
                    </div>
                ))}
                <button className="load-more" onClick={loadCardsComics}>LOAD MORE</button>
                </div>
            </div>
          </div>
        </div>
      )

}

export default Comics;