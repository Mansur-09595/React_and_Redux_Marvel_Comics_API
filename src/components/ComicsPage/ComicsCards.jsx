import ComicsCard from "./ComicsCard";
import "./comicspage.css";

const ComicsCards = ({ comics, cardsComics }) => {
  return (
    <div className="Comics">
      <div className="wrapper-comics">
        <div className="block-comics">
          <div className="marvel-comics">
            {comics.slice(0, cardsComics).map((item) => (
              <ComicsCard  item={item}/>
            ))}    
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicsCards;
