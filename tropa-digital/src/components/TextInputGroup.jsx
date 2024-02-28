import PropTypes from "prop-types";
import { useState, forwardRef } from "react";

const TextInputGroup = forwardRef(function TextInputGroup(
  { label, htmlFor, regex, className, icon },
  ref
) {
  const [text, setText] = useState("");
  const [validInputValue, setValidInputValue] = useState(true);

  const checkText = (value) => {
    setText(value.target.value);

    regValidation(text, regex);
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
    <div className="input-group default-input-group default-input-group--margin-bottom">
      <label
        className={`input-group__label default-input-group__label ${className}`}
        htmlFor={htmlFor}
      >
        {label}
      </label>

      <div className="input-group__container-input default-container-input">
        <input
          id={htmlFor}
          type="text"
          placeholder="Insira seu e-mail"
          className={
            validInputValue === true
              ? "default-container-input__input"
              : "default-container-input__input default-container-input__input--invalid "
          }
          value={text}
          onChange={checkText}
          onKeyUp={checkText}
          ref={ref}
          maxLength={60}
        />
        <span className="material-symbols-outlined container-input__icon">
          {icon}
        </span>
      </div>
    </div>
  );
});

TextInputGroup.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  icon: PropTypes.string,
  regex: PropTypes.string,
  className: PropTypes.string,
};

export default TextInputGroup;
