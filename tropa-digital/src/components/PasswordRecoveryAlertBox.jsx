import PropTypes from "prop-types";
import { TextInputGroup } from "./Index.jsx";
import { useRef } from "react";

export default function PasswordRecoveryAlertBox({ handleShowAlertBox }) {
  const mailInputRef = useRef(null);

  const cancelPasswordRecovery = (e) => {
    e.preventDefault();

    handleShowAlertBox(false);
  };

  const recoverPassword = (e) => {
    e.preventDefault();

    if (
      mailInputRef.current.classList.contains(
        "default-container-input__input--invalid"
      ) === true ||
      mailInputRef.current.value === ""
    ) {
      return;
    }

    console.log("foi");
    //logica de enviar um e-mail aqui
  };

  return (
    <div className="password-recovery-alert-box">
      <h2 className="password-recovery-alert-box__title">
        Esqueci minha senha
      </h2>

      <p className="password-recovery-alert-box__paragraphy">
        Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe
        enviaremos um link com as instruções.
      </p>

      <form className="form-to-recover-password">
        <TextInputGroup
          label="E-mail"
          htmlFor="eMail"
          icon="mail"
          regex="^[a-zA-Z]{1}[a-zA-Z0-9]{2,}@([a-zA-Z]{3,}.){1}[a-zA-Z]{3,}$"
          className="form-to-recover-password__label"
          ref={mailInputRef}
        />

        <div className="password-recovery-buttons-container">
          <button
            className="password-recovery-buttons-container__button"
            onClick={recoverPassword}
          >
            Enviar
          </button>
          <button
            className="password-recovery-buttons-container__button"
            onClick={(e) => cancelPasswordRecovery(e)}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

PasswordRecoveryAlertBox.propTypes = {
  handleShowAlertBox: PropTypes.func,
};
