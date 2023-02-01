import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const AboutComics = () => {
  const {id} = useParams()
  const selectedComics = useSelector((state) => state.comics).find(item => item.id === Number(id))
  return (
        <div className="about-hero">
          <div className="about-hero-flex">
            <img className="heroes-img-second-block" src={`${selectedComics.thumbnail?.path}.${selectedComics.thumbnail?.extension}`} />
            <div className="more-info">
              <h2 className="name-heroes">{selectedComics.title}</h2>
            </div>
          </div>
        </div>
  );
};

export default AboutComics;