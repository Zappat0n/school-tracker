import './NavBar.scss';

const NavBar = () => {
  const click = () => {

  };

  return (
    <div className="nav-bar">
      <div className="center" />
      Hi
      <div className="right">
        <button type="button" onClick={() => click()}>
          <i className="fas fa-user" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
