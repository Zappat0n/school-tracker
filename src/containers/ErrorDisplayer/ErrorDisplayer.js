import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../reducers/actions';
import './ErrorDisplayer.scss';

const ErrorDisplayer = () => {
  const messages = useSelector((state) => state.errors || []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.length === 0) return null;

    const id = setInterval(() => {
      dispatch(setError([]));
    }, 3000);
    return () => clearInterval(id);
  });

  return (
    <div className="errors">
      {messages.map((message) => (<p key={message}>{message}</p>))}
    </div>
  );
};

export default ErrorDisplayer;
