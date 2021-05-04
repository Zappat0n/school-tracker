import PropTypes from 'prop-types';
import { useEffect } from 'react';
import UserForm from '../../containers/UserForm/UserForm';

const SignIn = ({ setErrors, setTitle }) => {
  useEffect(() => setTitle('Log In'), []);
  return (
    <UserForm
      action="Log In"
      handleError={(messages) => setErrors(messages)}
    />
  );
};

SignIn.propTypes = {
  setErrors: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default SignIn;
