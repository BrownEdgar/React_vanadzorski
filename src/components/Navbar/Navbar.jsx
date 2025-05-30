import { Link } from 'react-router';

import './Navbar.scss';

function Navbar() {
  return (
    <header className="Navbar">
      <div className="container">
        <div className="logo">
          <h1>Rolling</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/actions'}>Actions</Link>
            </li>
            <li>
              <Link to={'/creators'}>Creators</Link>
            </li>
          </ul>
        </nav>
        <div className="Navbar__buttons">
          <span className="icon">
            <img src="thunder.png" alt="thunder icon" />
          </span>
          <button>Connect Wallet</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
