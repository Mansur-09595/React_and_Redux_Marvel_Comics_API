import { Link } from "react-router-dom";
import "./comicspage.css";

const ComicsCard = ({ item }) => {
  return (
    <div className="comics-cart" key={item.id}>
      <Link to={`/comics/${item.id}`}>
        <img className="comics-img" src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt={item.title}/>
      </Link>
      <div className="comics-title">{item.title}</div>
      <div className="comics-price">{item.prices[0].price === 0 ? "NOT AVAILABLE" : `${item.prices[0].price} $`}</div>
    </div>
  );
};

export default ComicsCard;
