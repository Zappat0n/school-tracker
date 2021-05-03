import PropTypes from 'prop-types';
import { useEffect } from 'react';
import UserForm from '../../containers/UserForm/UserForm';

const SignUp = ({ setErrors, setTitle }) => {
  useEffect(() => setTitle('Sign Up'), []);
  return (
    <UserForm
      action="Sign Up"
      handleError={(messages) => setErrors(messages)}
    />
  );
};

SignUp.propTypes = {
  setErrors: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default SignUp;
