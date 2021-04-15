import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logIn, signUp } from '../../api/queries';
import { changeTitle, save } from '../../slices/userSlice';

const UserForm = (props) => {
  const { action } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  dispatch(changeTitle(action));

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
      history.push('/classrooms/');
    }
    return false;
  }

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
