import { useDispatch, useSelector } from 'react-redux';
import '../../sass/Actions.scss';
import { useEffect } from 'react';
import { getAllActions } from '@/features/products/productsSlice';
import Row from '@/components/Row/Row';

function Actions() {
  const axtions = useSelector((state) => state.actions);

  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(getAllActions());
  }, [dipatch]);

  return (
    <div className="Actions">
      <Row title={'Live auctions 🔥'} data={axtions} />
    </div>
  );
}

export default Actions;
