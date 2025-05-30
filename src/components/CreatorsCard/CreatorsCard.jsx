import "@/sass/CreatorsCard.scss";

function CreatorsCard({ elem }) {
  return <article className='CreatorsCard'>
    <img src={elem.image || null} alt="" className="CreatorsCard__image" draggable={false} />
    <div className="CreatorsCard__text">

    </div>
  </article>;
}

export default CreatorsCard;
