import '../../sass/Home.scss';
import { useSelector } from 'react-redux';
import Row from '@/components/Row/Row';

function Home() {
  const actions = useSelector((state) => state.actions.slice(0, 4));
  return (
    <div className="Home">
      <Row title={'Live auctions 🔥'} data={actions} />
    </div>
  );
}

export default Home;
