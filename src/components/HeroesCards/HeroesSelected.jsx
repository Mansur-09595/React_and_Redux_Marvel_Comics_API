import { Link } from "react-router-dom";
import "./heroesselected.css";

const HeroesSelected = ({ selectedCharacter }) => {
  return (
    <>
      {Object.keys(selectedCharacter).length > 0 ? (
        <div className="about-hero-right-block">
          <div className="about-hero-flex-right-block">
            <img className="heroes-img-right-block" src={`${selectedCharacter.thumbnail?.path}.${selectedCharacter.thumbnail?.extension}`} alt={selectedCharacter.name}/>
            <div className="more-info-right-block">
              <h2 className="name-heroes-right-block">
                {selectedCharacter.name.length > 16
                  ? `${selectedCharacter.name.substring(0, 16)}...`
                  : selectedCharacter.name}
              </h2>
              <Link key={selectedCharacter} to={`/character/${selectedCharacter.id}`} >
                <button className="homepage-right-block">Homepage</button>
              </Link>
              <Link key={selectedCharacter.id} to={selectedCharacter.urls[1].url} >
                <button className="wiki-right-block">Wiki</button>
              </Link>
            </div>
          </div>
          <p className="description-right-block">
            {selectedCharacter.description}
          </p>
        </div>
      ) : (
        <div className="skeleton-blocks">
          <h1 className="h1">Please select a character to see information</h1>
          <div className="skeleton-block">
            <div className="skeleton-circle"></div>
            <div className="skeleton-string"></div>
          </div>
          <div className="skeleton-same"></div>
          <div className="skeleton-same"></div>
          <div className="skeleton-same"></div>
        </div>
      )}
    </>
  );
};

export default HeroesSelected;
