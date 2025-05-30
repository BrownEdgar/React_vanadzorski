import './Row.scss';
import Card from '../Card/Card';
import { Link } from 'react-router';
import CreatorsCard from '../CreatorsCard/CreatorsCard';

function Row({ title, data, variant }) {


  const Element = variant === 'creators' ? CreatorsCard : Card

  return (
    <div className="Row container">
      <div className="Row__header">
        <h1>{title}</h1>
        <Link to={variant}>{variant === 'actions' ? 'View all auctions' : 'View All'}</Link>
      </div>
      <div className="Row__flex">
        {data?.map((elem) => {
          return <Element elem={elem} key={elem.id} withDate={variant === 'actions'} />;
        })}
      </div>
    </div>
  );
}

export default Row;
