import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextInputGroup,
  PasswordInputGroup,
  Banner,
  RegistrationConfirmationAlertBox,
  LoadingContainer
} from "../components/Index.jsx";

export default function RegistrationSection() {
  const [validateTermsAndConditions, setValidateTermsAndConditions] =
    useState(false);
  const [rememberData, setRememberData] = useState(false);
  const [showAlertBox, setShowAlertBox] = useState(false);
  const [mail, setEmail] = useState(null);
  const nameInputRef = useRef(null);
  const mailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordConfirmationInputRef = useRef(null);
  const [showLoading, setShowLoading] = useState(false);

  const navigate = useNavigate();

  const termsAndConditionsAccepted = () => {
    validateTermsAndConditions === true
      ? setValidateTermsAndConditions(false)
      : setValidateTermsAndConditions(true);
  };

  const saveData = () => {
    rememberData === true ? setRememberData(false) : setRememberData(true);
  };

  const confirmRegistration = (e) => {
    e.preventDefault();

    const validation =
      passwordConfirmationInputRef.current.classList.contains(
        "default-container-input__input--invalid"
      ) === true ||
      nameInputRef.current.classList.contains(
        "default-container-input__input--invalid"
      ) === true ||
      mailInputRef.current.classList.contains(
        "default-container-input__input--invalid"
      ) === true ||
      passwordInputRef.current.classList.contains(
        "default-container-input__input--invalid"
      ) === true ||
      passwordConfirmationInputRef.current.value === "" ||
      nameInputRef.current.value === "" ||
      mailInputRef.current.value === "" ||
      passwordInputRef.current.value === "";

    if (validation) {
      alert("Algum campo está em branco ou inválido.");
      return;
    }

    if (
      passwordConfirmationInputRef.current.value !==
      passwordInputRef.current.value
    ) {
      alert("Senhas divergentes.");
      return;
    }

    if (validateTermsAndConditions === false) {
      alert("Necessário aceitar os termos.");
      return;
    }

    setShowAlertBox(true);
    setEmail(mailInputRef.current.value);
  };

  const goToStart = (e) => {
    e.preventDefault();

    setShowLoading(true);
    setTimeout(() => {
      navigate("/");
      setShowLoading(false);
    }, 1000);
  };

  return (
    <>
      {showLoading === true ? <LoadingContainer /> : null}
      <main className="main-content">
        <Banner />

        <section className="registration-section">
          <Link
            className="registration-section__back-button"
            onClick={goToStart}
          >
            <span className="material-symbols-outlined">chevron_left</span>
            Voltar
          </Link>

          <form className="registration-form">
            <fieldset className="registration-form-container container">
              <legend className="registration-form-container__title title">
                Cadastro
              </legend>

              <TextInputGroup
                label="Nome"
                htmlFor="name"
                regex="^[a-zA-Z]{3,40}$"
                ref={nameInputRef}
              />

              <TextInputGroup
                label="E-mail"
                htmlFor="eMail"
                regex="^[a-zA-Z]{1}[a-zA-Z0-9]{2,}@([a-zA-Z]{3,}.){1}[a-zA-Z]{3,}$"
                ref={mailInputRef}
              />

              <PasswordInputGroup
                label="Senha"
                htmlFor="password"
                ref={passwordInputRef}
              />

              <PasswordInputGroup
                label="Confirmar senha"
                htmlFor="password-confirmation"
                className="default-input-group--no-bottom-margin"
                ref={passwordConfirmationInputRef}
              />

              <div className="default-input-group">
                <div
                  className="input-radio"
                  onClick={termsAndConditionsAccepted}
                >
                  <input type="radio" checked={validateTermsAndConditions} />
                  <label htmlFor="" className="input-radio__label">
                    Li e Concordo com os
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="input-group-registration-form-link"
                    >
                      Termos e Condições
                    </a>
                    <span className="label--special-character">&#10033;</span>
                  </label>
                </div>

                <div className="input-radio" onClick={saveData}>
                  <input type="radio" checked={rememberData} />
                  <label
                    htmlFor=""
                    className="input-radio__label default-input-group__label"
                  >
                    Lembrar e-mail e senha
                  </label>
                </div>
              </div>

              <button
                className="default-button registration-form-container__button"
                onClick={confirmRegistration}
              >
                Cadastrar
              </button>
            </fieldset>
          </form>
        </section>
      </main>

      {showAlertBox === true ? (
        <div className="alert-section">
          <RegistrationConfirmationAlertBox
            handleShowAlertBox={setShowAlertBox}
            eMail={mail}
          />
        </div>
      ) : null}
    </>
  );
}
