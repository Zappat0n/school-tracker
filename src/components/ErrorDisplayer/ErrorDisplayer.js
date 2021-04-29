import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './ErrorDisplayer.scss';

const ErrorDisplayer = ({ messages, setMessages }) => {
  useEffect(() => {
    if (!messages || messages.length === 0) return null;

    const id = setInterval(() => {
      setMessages([]);
    }, 3000);
    return () => clearInterval(id);
  });

  const displayErrors = () => {
    if (messages instanceof Array) {
      return messages.map((message) => (<p key={message}>{message}</p>));
    }
    return messages;
  };

  return (
    <div className="errors">
      {displayErrors()}
    </div>
  );
};

ErrorDisplayer.defaultProps = {
  messages: [],
};

ErrorDisplayer.propTypes = {
  messages: PropTypes.instanceOf(Object),
  setMessages: PropTypes.func.isRequired,
};

export default ErrorDisplayer;
