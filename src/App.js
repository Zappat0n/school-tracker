import PropTypes from 'prop-types';
import NavBar from './containers/NavBar/NavBar';
import ErrorDisplayer from './components/ErrorDisplayer/ErrorDisplayer';

const App = ({ errors, setErrors }) => (
  <>
    <header>
      <NavBar />
      <ErrorDisplayer messages={errors} setMessages={(messages) => setErrors(messages)} />
    </header>
  </>
);

App.defaultProps = {
  errors: [],
};

App.propTypes = {
  errors: PropTypes.string,
  setErrors: PropTypes.func.isRequired,
};

export default App;
