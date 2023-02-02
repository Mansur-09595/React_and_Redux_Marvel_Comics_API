import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ComicsPage from './components/ComicsPage/ComicsPage';

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
          <ComicsPage comics={comics} cardsComics={cardsComics} loadCardsComics={loadCardsComics} />
        </div>
      )

}

export default Comics;