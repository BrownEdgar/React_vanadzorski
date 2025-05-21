import './Row.scss';
import Card from '../Card/Card';

function Row({ title, data }) {
  return (
    <div className="Row container">
      <div className="Row__header">
        <h1>{title}</h1>
        <a href="/actions">View all auctions</a>
      </div>
      <div className="Row__flex">
        {data?.map((elem) => {
          return <Card elem={elem} key={elem.id} />;
        })}
      </div>
    </div>
  );
}

export default Row;
