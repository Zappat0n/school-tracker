import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ComboBox = (props) => {
  const { presentation, student, handleChange } = props;
  let id;
  const scores = useSelector((state) => state.classroomTable.scores);

  const getSign = () => {
    const score = scores[`${presentation}-${student}`] || 0;
    switch (score) {
      case 0: return ' ';
      case 1: return '/';
      case 2: return 'ꓥ';
      case 3: return '𐊅';
      default: return null;
    }
  };

  return (
    <td>
      <select className="combo" id={id} presentation={presentation} student={student} onChange={(event) => handleChange(event, presentation, student)} value={getSign()}>
        <option value=" "> </option>
        <option value="/">/</option>
        <option value="ꓥ">ꓥ</option>
        <option value="𐊅">𐊅</option>
      </select>
    </td>
  );
};

ComboBox.propTypes = {
  presentation: PropTypes.number.isRequired,
  student: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ComboBox;
