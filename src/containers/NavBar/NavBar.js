import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const title = useSelector((state) => state.title);

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
          <i id="menu-toggle" role="menubar" tabIndex={0} className="fas fa-bars" onKeyDown={(e) => toggleMenu(e)} onClick={(e) => toggleMenu(e)} />
        </div>
        <div className="center nav-col ta-center">
          {title || 'Welcome'}
        </div>
        <div className="right nav-col ta-right">
          <Link to="/school-tracker/user/signin" className="link">
            <i className="fas fa-user" />
          </Link>
        </div>
      </div>
      <div className="menu-content d-none">
        <Link to="/school-tracker/classrooms/" className="link">Classrooms</Link>
        <Link to="/school-tracker/presentation_areas/" className="link">Curriculum</Link>
        <Link to="/school-tracker/presentation_subareas/" className="link">Subareas</Link>
      </div>
    </>
  );
};

export default NavBar;
