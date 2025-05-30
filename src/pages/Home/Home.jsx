import '../../sass/Home.scss';
import { useSelector } from 'react-redux';
import Row from '@/components/Row/Row';


function Home() {
  const actions = useSelector((state) => state.actions.slice(0, 4));
  const featured = useSelector((state) => state.featured.slice(0, 12));
  const creators = useSelector((state) => state.featured.slice(0, 12));

  return (
    <div className="Home">
      <Row title={'Live auctions 🔥'} data={actions} variant="actions" />
      <Row title={'Featured ✨'} data={featured} variant="featured" />
      <Row title={'Top Creators'} data={creators} variant="creators" />
    </div>
  );
}

export default Home;
