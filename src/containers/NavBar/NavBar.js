import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const title = useSelector((state) => state.user.title);

  const toggleMenu = (e) => {
    e.preventDefault();
    const content = document.querySelector('.menu-content');
    if (content.classList.contains('d-none')) {
      content.classList.remove('d-none');
    } else {
      content.classList.add('d-none');
    }
  };

  return (
    <>
      <div className="nav-bar">
        <div className="left nav-col ta-left">
          <i id="menu-toggle" role="none" className="fas fa-bars" onKeyDown={(e) => toggleMenu(e)} onClick={(e) => toggleMenu(e)} />
        </div>
        <div className="center nav-col ta-center">
          {title || 'Welcome'}
        </div>
        <div className="right nav-col ta-right">
          <Link to="/user/signin" className="link">
            <i className="fas fa-user" />
          </Link>
        </div>
      </div>
      <div className="menu-content d-none">
        <Link to="/classrooms/" className="link">Classrooms</Link>
        <Link to="/presentation_areas/" className="link">Curriculum</Link>
      </div>
    </>
  );
};

export default NavBar;
