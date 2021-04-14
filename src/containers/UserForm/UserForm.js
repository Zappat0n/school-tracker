import PropTypes from 'prop-types';

const UserForm = (props) => {
  const { action } = props;
  const submit = () => {

  };

  return (
    <form className="user-form" onSubmit={(event) => submit(event)}>
      <section className="email">
        <label htmlFor="email">
          Email
          <input id="email" type="text" />
        </label>
      </section>
      <section className="password">
        <label htmlFor="password">
          Password
          <input id="password" type="password" />
        </label>
      </section>
      <button className="submit" type="submit">
        {action}
      </button>
    </form>
  );
};

UserForm.propTypes = {
  action: PropTypes.string.isRequired,
};

export default UserForm;
