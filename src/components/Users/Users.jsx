import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../features/users/usersSlice';


function Users() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addUser("Karen"))
  }

  return <div className='Users'>
    <h1>Our Users</h1>
    <h2>{JSON.stringify(users)}</h2>
    <button onClick={handleClick}>add user</button>
  </div>;
}

export default Users;
