import { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { ButtonVisibility } from "./Index.jsx";

const PasswordInputGroup = forwardRef(function TextInputGroup(
  { label, htmlFor, className },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [validInputValue, setValidInputValue] = useState(true);

  const checkPassword = (value) => {
    setPassword(value.target.value);

    regValidation(password, "^[0-9]{4,}$");
  };

  function regValidation(string, reg) {
    const regex = new RegExp(reg, "g");

    const newString = regex.exec(string);

    if (newString !== null) {
      setValidInputValue(true);
      return;
    }
    setValidInputValue(false);
  }

  return (
    <div
      className={`input-group default-input-group default-input-group--margin-bottom ${className}`}
    >
      <label
        className="input-group__label default-input-group__label"
        htmlFor={htmlFor}
      >
        {label}
      </label>

      <div className="input-group__container-input default-container-input">
        <input
          id={htmlFor}
          type={showPassword === true ? "text" : "password"}
          placeholder="Insira sua senha utilizando apenas números"
          className={
            validInputValue === true
              ? "default-container-input__input"
              : "default-container-input__input default-container-input__input--invalid "
          }
          value={password}
          onChange={checkPassword}
          onKeyUp={checkPassword}
          ref={ref}
          maxLength={30}
        />

        <ButtonVisibility
          handleShowPassword={setShowPassword}
          showPassword={showPassword}
        />
      </div>

      <span
        className={
          validInputValue === false
            ? "default-input-group__incorrect-password-alert"
            : "default-input-group__incorrect-password-alert default-input-group__incorrect-password-alert--display"
        }
      >
        Apenas números são permitidos nesse campo
      </span>
    </div>
  );
});

PasswordInputGroup.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default PasswordInputGroup;
