import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NavHero from "../Navbar/NavHero";
import './abouthero.css'

const AboutHero = () => {
  const {id} = useParams()
  const selectedCharacter = useSelector((state) => state.characters).find(item => item.id === Number(id))
  return (
      <>
        <NavHero />
        <div className="about-hero">
          <div className="about-hero-flexs">
            <img className="heroes-img-second-blocks" src={`${selectedCharacter.thumbnail?.path}.${selectedCharacter.thumbnail?.extension}`} />
            <div className="more-infos">
              <h2 className="name-heroes">{selectedCharacter.name}</h2>
              <p className="description">{selectedCharacter.description}</p>
            </div>
          </div>
        </div>
      </>
  );
};

export default AboutHero;