import PropTypes from 'prop-types';
import NavBar from './components/NavBar/NavBar';
import ErrorDisplayer from './components/ErrorDisplayer/ErrorDisplayer';

const App = ({ errors, setErrors, title }) => (
  <>
    <header>
      <NavBar title={title} />
      <ErrorDisplayer messages={errors} setMessages={(messages) => setErrors(messages)} />
    </header>
  </>
);

App.defaultProps = {
  errors: [],
  title: 'Welcome',
};

App.propTypes = {
  errors: PropTypes.instanceOf(Object),
  setErrors: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default App;
