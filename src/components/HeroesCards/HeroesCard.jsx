const HeroesCard = ({ item, handleImageClick }) => {
  return (
    <div className="marvel-cart" key={item.id} onClick={() => handleImageClick(item)}>
      <img className="heroes-img"  src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt={item.name} />
      <div className="heroes-name">{item.name}</div>
    </div>
  );
};

export default HeroesCard;
