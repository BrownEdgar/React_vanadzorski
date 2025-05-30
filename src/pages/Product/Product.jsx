import { useParams } from 'react-router';
import "../../sass/Product.scss";
import { useSelector } from 'react-redux';

function Product() {
  const x = useSelector((state) => state.actions)
  console.log(x);

  const { id } = useParams()
  return (
    <div className='Product'>
      <h1>Product Page {id}</h1>
    </div>
  );
}

export default Product;
