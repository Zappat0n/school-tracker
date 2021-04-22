import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ComboBox = (props) => {
  const { presentation, student, handleChange } = props;
  const score = useSelector((state) => state.classroomTable.scores[`${presentation}-${student}`] || 0);

  const getSign = () => {
    switch (score.score) {
      case 0: return ' ';
      case 1: return '/';
      case 2: return 'ꓥ';
      case 3: return '𐊅';
      default: return null;
    }
  };

  return (
    <td>
      <select className="combo" id={score.id} presentation={presentation} student={student} onChange={(event) => handleChange(event, presentation, student, score.id)} value={getSign()}>
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
