import PropTypes from 'prop-types';
import UserForm from '../../containers/UserForm/UserForm';

const SignIn = ({ setErrors }) => (
  <UserForm action="Log In" handleError={(messages) => setErrors(messages)} />
);

SignIn.propTypes = {
  setErrors: PropTypes.func.isRequired,
};

export default SignIn;
