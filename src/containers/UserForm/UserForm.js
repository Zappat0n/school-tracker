import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { logIn, signUp } from '../../api/queries';
import { save } from '../../slices/userSlice';

const UserForm = (props) => {
  const { action } = props;
  const redirect = useSelector((state) => state.user.redirect);
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

  async function getSignUp(email, password) {
    if (signUp(email, password)) {
      getLogIn(email, password);
    }
  }

  async function submit(event) {
    event.preventDefault();
    const { email, password } = event.target;

    if (action === 'Log In') {
      const response = await getLogIn(email.value, password.value);
      if (response) history.push('/classrooms/');
    } else if (getSignUp(email.value, password.value)) {
      return <Redirect to="/index/" />;
    }
    return false;
  }

  if (redirect) return <Redirect to={redirect} />;
  return (
    <form className="user-form" onSubmit={(event) => submit(event)}>
      <section className="email">
        <label htmlFor="email">
          Email
          <input id="email" type="text" />
        </label>
      </section>
      <section className="password">
        <label htmlFor="password">
          Password
          <input id="password" type="password" />
        </label>
      </section>
      <button className="submit" type="submit">
        {action}
      </button>
    </form>
  );
};

UserForm.propTypes = {
  action: PropTypes.string.isRequired,
};

export default UserForm;
