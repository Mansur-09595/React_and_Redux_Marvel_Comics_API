import NavHero from "../Navbar/NavHero";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './aboutcomics.css'


const AboutComics = () => {
  const {id} = useParams()
  const selectedComics = useSelector((state) => state.comics).find(item => item.id === Number(id))
  return (
      <>
      <NavHero />
        <div className="about-comics">
          <div className="about-comics-flex">
            <img className="comics-img-second-block" src={`${selectedComics.thumbnail?.path}.${selectedComics.thumbnail?.extension}`} />
            <div className="more-comics">
              <h2 className="title-comics">{selectedComics.title}</h2>
              <p className="description-comics">{selectedComics.description}</p>
              <p className="pageCount-comics">{selectedComics.pageCount} pages</p>
              <p>Language: en-us</p>
              <span className="price-comics">{selectedComics.prices[0].price} $</span>
            </div>
            <div className="back">
            <Link to="/comics">
              <p>Back to all</p>
            </Link>
          </div>
          </div>
        </div>
        </>
  );
};

export default AboutComics;