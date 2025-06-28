import cardimg from '../../public/img/card3.png';
import dateIcon from '../../public/icons/date.svg';
import floorIcon from '../../public/icons/float.svg';
import signIcon from '../../public/icons/sign.svg';
import heartIcon from '../../public/icons/heart.svg';
import notaryIcon from '../../public/icons/notary.svg';

function Item({ price, title, type, address, floor, year, seller, rating, deals, verified }) {
  return (
    <div className="item-card">
      <img className="item-img" src={cardimg} alt={title} />
      <div className="item-body">
        <p className="item-price">{price}</p>
        <h3 className="item-title">{title}</h3>
        <div className="item-row">
          <img src={floorIcon} alt="этаж" className="item-icon" />
          <span className="item-detail">{floor}</span>
        </div>
        <div className="item-row">
          <img src={dateIcon} alt="год постройки" className="item-icon" />
          <span className="item-detail">{year} г.п.</span>
        </div>
        <div className="item-row">
          <img src={signIcon} alt="тип" className="item-icon" />
          <span className="item-detail">{type}</span>
        </div>
        <p className="item-address">{address}</p>

        <hr className="item-divider" />

        <div className="item-row">
          <img src={heartIcon} alt="рейтинг" className="item-icon" />
          <span className="item-detail">
            {seller} · {rating} ★ · {deals} сделок
          </span>
        </div>
        <button className="item-button">Связаться</button>
      </div>
      <div className="item-verified">
        <img src={notaryIcon} alt="verified" className="verified-icon" /> {verified}
      </div>
    </div>
  );
}

export default Item;