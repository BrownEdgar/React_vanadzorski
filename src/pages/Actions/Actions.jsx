import { useSelector } from 'react-redux';
import '../../sass/Actions.scss';

import Row from '@/components/Row/Row';

function Actions() {
  const actions = useSelector((state) => state.actions);
  console.log(actions);

  return (
    <div className="Actions">
      <Row title={'Live auctions 🔥'} data={actions} variant={'actions'} />
    </div>
  );
}

export default Actions;
