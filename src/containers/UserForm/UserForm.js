import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logIn, signUp } from '../../api/queries';
import { changeTitle, save, setError } from '../../slices/userSlice';
import REACT_APP_NAME from '../../constants';
import './UserForm.scss';

const UserForm = (props) => {
  const { action } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  async function getLogIn(username, password) {
    const response = await logIn(username, password);
    if (response.token) {
      dispatch(save({
        token: response.token,
      }));
      return true;
    }
    dispatch(setError(response.errors));
    return false;
  }

  useEffect(() => {
    dispatch(changeTitle(action));
  }, []);

  async function getSignUp(username, password) {
    const response = await signUp(username, password);
    if (response.data) return (response && getLogIn(username, password));
    dispatch(setError(response.errors));
    return false;
  }

  async function submit(event) {
    event.preventDefault();
    const { username, password } = event.target;

    if (action === 'Log In') {
      const response = await getLogIn(username.value, password.value);
      if (response) history.push(`${REACT_APP_NAME}/classrooms/`);
    } else {
      const response = await getSignUp(username.value, password.value);
      if (response) history.push(`${REACT_APP_NAME}/classrooms/`);
    }
    return false;
  }

  return (
    <form className="user-form table" onSubmit={(event) => submit(event)}>
      <section className="username">
        <label htmlFor="username">
          Username
          <input id="username" type="text" />
        </label>
      </section>
      <section className="password">
        <label htmlFor="password">
          Password
          <input id="password" type="password" autoComplete="on" />
        </label>
      </section>
      <section className="buttons">
        <button className="submit" type="submit">
          {action}
        </button>
        <div className="link-container">
          {action === 'Log In' ? <Link to={`${REACT_APP_NAME}/user/signup`} className="link">Sign up</Link> : <Link to={`${REACT_APP_NAME}/user/signin`} className="link">Log In</Link> }
        </div>
      </section>
    </form>
  );
};

UserForm.propTypes = {
  action: PropTypes.string.isRequired,
};

export default UserForm;
