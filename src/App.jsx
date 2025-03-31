import { useState } from 'react';
import Users from './components/Users/Users';


function App() {
  const [users] = useState([
    { id: 1, fullName: 'Jerome Williams', friendsCount: 7, image: 'https://images.unsplash.com/photo-1622559924472-2c2f69abb854?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, fullName: 'Sally Steele', friendsCount: 3, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, fullName: 'Rachel Bell', friendsCount: 8, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ]);

  return (
    <div className='App'>
      <Users users={users} />
    </div>

  )
}

export default App;
