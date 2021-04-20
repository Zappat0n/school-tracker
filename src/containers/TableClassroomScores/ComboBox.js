import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { postEvent } from '../../api/queries';

const ComboBox = ({ _id, presentation, student }) => {
  const token = useSelector((state) => state.user.token);
  // const dispatch = useDispatch();
  let id = _id;

  const getScore = (value) => {
    switch (value) {
      case ' ': return 0;
      case '/': return 1;
      case 'ꓥ': return 2;
      case '𐊅': return 3;
      default: return null;
    }
  };

  async function query(score) {
    if (!token) return;
    const response = await postEvent(token, new Date().toISOString().split('T')[0], student, presentation, getScore(score));
    console.log(response);
    if (response && response.data) id = response;
  }

  const handleChange = (e) => {
    e.preventDefault();
    query(e.target.value);
  };

  return (
    <td>
      <select className="combo" id={id} presentation={presentation} student={student} onChange={(e) => handleChange(e)}>
        <option value=" "> </option>
        <option value="/">/</option>
        <option value="ꓥ">ꓥ</option>
        <option value="𐊅">𐊅</option>
      </select>
    </td>
  );
};

ComboBox.defaultProps = {
  _id: undefined,
};

ComboBox.propTypes = {
  presentation: PropTypes.string.isRequired,
  student: PropTypes.instanceOf(Array).isRequired,
  _id: PropTypes.number,
};

export default ComboBox;
