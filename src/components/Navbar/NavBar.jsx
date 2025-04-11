import { faFacebook, faKaggle, faLinkedin, faOdnoklassniki, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css'

function NavBar() {
  return (
    <header>
      <div className="logo">
        <h1>
          LOGO
        </h1>
        <span>
          <FontAwesomeIcon icon={faKaggle} bounce size='4x' />
        </span>
      </div>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebook} bounce /> facebook
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} bounce /> YouTube
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} bounce /> Linkedin
          </li>
          <li>
            <FontAwesomeIcon icon={faVk} bounce /> VK
          </li>
          <li>
            <FontAwesomeIcon icon={faOdnoklassniki} bounce /> OK
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
