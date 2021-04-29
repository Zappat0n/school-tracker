import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../reducers/actions';
import './ErrorDisplayer.scss';

const ErrorDisplayer = () => {
  const messages = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(messages);
    if (!messages || messages.length === 0) return null;

    const id = setInterval(() => {
      dispatch(setError([]));
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

export default ErrorDisplayer;
