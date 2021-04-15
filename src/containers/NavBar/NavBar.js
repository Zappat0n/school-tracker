import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const title = useSelector((state) => state.user.title);
  return (
    <div className="nav-bar">
      <div className="center" />
      {title}
      <div className="right">
        <Link to="/user/signin" className="link">
          <i className="fas fa-user" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
