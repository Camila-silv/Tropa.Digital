import PropTypes from "prop-types";

export default function RegistrationConfirmationAlertBox({
  eMail,
  handleShowAlertBox
}) {
  
  return (
    <div className="registration-confirmation-alert-box">
      <h2 className="registration-confirmation-alert-box__title">
        Confirme seu E-mail
      </h2>

      <p className="registration-confirmation-alert-box__paragraphy">
        Para finalizar seu cadastro, enviamos um e-mail de confirmação para{" "}
        <span className="paragraphy__e-mail">{eMail}</span>.
        Verifique sua caixa de entrada e clique no link “Confirmar E-mail”
      </p>

      <p className="registration-confirmation-alert-box__paragraphy">
        Caso não tenha recebido o e-mail clique em “Enviar e-mail novamente” que
        enviaremos um novo e-mail.
      </p>

      <div className="registration-confirmation-buttons-container">
        <button className="registration-confirmation-buttons-container__button" onClick={() => handleShowAlertBox(false)}>
          Fechar
        </button>
        <button className="registration-confirmation-buttons-container__button">
          Enviar e-mail novamente
        </button>
      </div>
    </div>
  );
}


RegistrationConfirmationAlertBox.propTypes = {
  handleShowAlertBox: PropTypes.func,
  eMail: PropTypes.string,
  
}