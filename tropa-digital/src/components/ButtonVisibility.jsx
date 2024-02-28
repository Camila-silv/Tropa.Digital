import PropTypes from "prop-types";

export default function ButtonVisibility({ handleShowPassword, showPassword }) {
  const displayPassword = (e) => {
    e.preventDefault();

    if (showPassword === true) {
      handleShowPassword(false);
    } else {
      handleShowPassword(true);
    }
  };
  return (
    <button
      className="material-symbols-outlined container-input__icon"
      onClick={displayPassword}
    >
      {showPassword === true ? "visibility" : "visibility_off"}
    </button>
  );
}

ButtonVisibility.propTypes = {
  handleShowPassword: PropTypes.func,
  showPassword: PropTypes.bool,
};
