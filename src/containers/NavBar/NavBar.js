import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => (
  <div className="nav-bar">
    <div className="center" />
    Hi
    <div className="right">
      <Link to="/user/signin" className="link">
        <i className="fas fa-user" />
      </Link>
    </div>
  </div>
);

export default NavBar;
