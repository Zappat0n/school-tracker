import PropTypes from 'prop-types';
import UserForm from '../../containers/UserForm/UserForm';

const SignUp = ({ setErrors }) => (
  <UserForm
    action="Sign Up"
    handleError={(messages) => setErrors(messages)}
  />
);

SignUp.propTypes = {
  setErrors: PropTypes.func.isRequired,
};

export default SignUp;
