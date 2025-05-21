import './Card.scss';

function Card({ elem }) {
  return (
    <article className="Card">
      <img src={elem.image} alt="" className="Card__image" draggable={false} />
      <div className="Card__text">
        <h2>{elem.title}</h2>
        <div className="devider"></div>
        <div className="Card__creators">
          <p>
            <img src="" alt="" />
            {elem.creators}
          </p>
          <span>
            Current Bid
            <br />
            <b className="Card__bid">{elem.currentBid}</b>
          </span>
        </div>
      </div>
    </article>
  );
}

export default Card;
