import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const AboutHero = () => {
  const {id} = useParams()
  const selectedCharacter = useSelector((state) => state.characters).find(item => item.id === Number(id))
  return (
        <div className="about-hero">
          <div className="about-hero-flex">
            <img className="heroes-img-second-block" src={`${selectedCharacter.thumbnail?.path}.${selectedCharacter.thumbnail?.extension}`} />
            <div className="more-info">
              <h2 className="name-heroes">{selectedCharacter.name}</h2>
            </div>
          </div>
          <p className="description">{selectedCharacter.description}</p>
        </div>
  );
};

export default AboutHero;