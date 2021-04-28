import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logIn, signUp } from '../../api/queries';
import {
  changeTitle, saveUsername, savePassword, setError,
} from '../../reducers/actions';
import REACT_APP_NAME from '../../constants';
import './UserForm.scss';
import storage from '../../storage/storage';

const UserForm = (props) => {
  const { action } = props;
  const username = useSelector((state) => state.userReducer.username);
  const password = useSelector((state) => state.userReducer.password);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log(username);
  // console.log(password);

  async function getLogIn(username, password) {
    const response = await logIn(username, password);
    if (response.token) {
      storage.save(response.token);
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

  async function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target;

    if (action === 'Log In') {
      const response = await getLogIn(username.value, password.value);
      if (response) {
        history.push(`${REACT_APP_NAME}/classrooms/`);
        dispatch(savePassword(''));
      }
    } else {
      const response = await getSignUp(username.value, password.value);
      if (response) {
        history.push(`${REACT_APP_NAME}/classrooms/`);
        dispatch(savePassword(''));
      }
    }
    return false;
  }

  const handleChange = (event, id) => {
    event.preventDefault();
    if (id === 'username') dispatch(saveUsername(event.target.value));
    else dispatch(savePassword(event.target.value));
  };

  return (
    <form className="user-form table" onSubmit={(event) => handleSubmit(event)}>
      <section className="username">
        <label htmlFor="username">
          Username
          <input id="username" type="text" value={username} onChange={(event) => handleChange(event, 'username')} />
        </label>
      </section>
      <section className="password">
        <label htmlFor="password">
          Password
          <input id="password" type="password" autoComplete="on" value={password} onChange={(event) => handleChange(event, 'password')} />
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
