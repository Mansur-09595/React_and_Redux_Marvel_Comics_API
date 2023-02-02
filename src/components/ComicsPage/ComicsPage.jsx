import NavHero from "../Navbar/NavHero";
import { Link } from "react-router-dom";
import "./comicspage.css";

const ComicsPage = ({ comics, cardsComics, loadCardsComics }) => {
  return (
    <>
      <NavHero />
      <div className="wrapper-comics">
        <div className="block-comics">
          <div className="marvel-comics">
            {comics.slice(0, cardsComics).map((item) => (
              <div className="comics-cart" key={item.id}>
                <Link to={`/comics/${item.id}`}>
                  <img className="comics-img" src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} />
                </Link>
                <div className="comics-title">{item.title}</div>
                <div className="comics-price">{item.prices[0].price}$</div>
              </div>
            ))}
            <button className="load-more" onClick={loadCardsComics}>LOAD MORE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComicsPage;
