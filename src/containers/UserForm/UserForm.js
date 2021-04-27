import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logIn, signUp } from '../../api/queries';
import { changeTitle, save } from '../../slices/userSlice';
import REACT_APP_NAME from '../../constants';
import './UserForm.scss';

const UserForm = (props) => {
  const { action } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  async function getLogIn(email, password) {
    const response = await logIn(email, password);
    if (response.access_token) {
      dispatch(save({
        email,
        password,
        token: response.access_token,
      }));
      return true;
    }
    return false;
  }

  useEffect(() => {
    dispatch(changeTitle(action));
  }, []);

  async function getSignUp(email, password) {
    const response = await signUp(email, password);
    return (response && getLogIn(email, password));
  }

  async function submit(event) {
    event.preventDefault();
    const { email, password } = event.target;

    if (action === 'Log In') {
      const response = await getLogIn(email.value, password.value);
      if (response) history.push(`${REACT_APP_NAME}/classrooms/`);
    } else {
      const response = await (getSignUp(email.value, password.value));
      if (response) history.push(`${REACT_APP_NAME}/classrooms/`);
    }
    return false;
  }

  return (
    <form className="user-form table" onSubmit={(event) => submit(event)}>
      <section className="email">
        <label htmlFor="email">
          Email
          <input id="email" type="text" />
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
