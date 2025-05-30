import { Link } from 'react-router';
import './Card.scss';
import moment from 'moment';

function Card({ elem, withDate }) {

  return (
    <article className="Card">
      {withDate ? <div className="Card__date">

        left
        {' '}
        {moment(elem.date).fromNow()}

      </div> : null}
      <img src={elem.image || null} alt="" className="Card__image" draggable={false} />
      <div className="Card__text">
        <Link to={`/actions/${elem.id}`}>{elem.title}</Link>
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
