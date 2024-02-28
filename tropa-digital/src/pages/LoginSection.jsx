import { useRef, useState } from "react";
import {
  TextInputGroup,
  PasswordInputGroup,
  LoadingContainer,
  Banner,
  PasswordRecoveryAlertBox,
} from "../components/Index.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function LoginSection() {
  const [rememberData, setRememberData] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showAlertBox, setShowAlertBox] = useState(false);
  const mailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const recoverUserPassword = (e) => {
    e.preventDefault();
    setShowAlertBox(true);
  };

  const saveData = () => {
    rememberData === true ? setRememberData(false) : setRememberData(true);
  };

  const register = (e) => {
    e.preventDefault();

    
    setShowLoading(true);
    setTimeout(() => {
      navigate("/registrationsection");
      setShowLoading(false);
    }, 1000);
  }

  const navigate = useNavigate();

  const login = (e) => {
    if (
      mailInputRef.current.classList.contains(
        "default-container-input__input--invalid"
      ) === true ||
      passwordInputRef.current.classList.contains(
        "default-container-input__input--invalid"
      ) === true ||
      passwordInputRef.current.value === "" ||
      mailInputRef.current.value === ""
    ) {
      e.preventDefault();
      alert("Algum campo em branco ou inválido.");
      return;
    }

    e.preventDefault();

    setShowLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
      setShowLoading(false);
    }, 2000);
  };

  return (
    <>
      {showLoading === true ? <LoadingContainer /> : null}

      <main className="main-content">
        <Banner />
        <section className="login-section">
          <form className="form">
            <fieldset className="form-container container">
              <legend className="form-container__title title">Login</legend>

              <TextInputGroup
                label="E-mail"
                htmlFor="eMail"
                icon="mail"
                regex="^[a-zA-Z]{1}[a-zA-Z0-9]{2,}@([a-zA-Z]{3,}.){1}[a-zA-Z]{3,}$"
                ref={mailInputRef}
              />

              <PasswordInputGroup
                label="Senha"
                htmlFor="password"
                className="default-input-group--no-bottom-margin"
                ref={passwordInputRef}
              />

              <div
                className="default-input-group input-radio"
                onClick={saveData}
              >
                <input type="radio" checked={rememberData} />
                <label className="default-input-group__label input-radio__label">
                  Lembrar e-mail e senha
                </label>
              </div>

              <div className="button-group">
                <Link
                  to="/dashboard"
                  className="button-group__button  default-button"
                  onClick={login}
                >
                  Entrar
                </Link>

                <button
                  className="button-group__button default-button"
                  onClick={(e) => recoverUserPassword(e)}
                >
                  Esqueceu a senha?
                </button>
              </div>

              <span className="form-container__link">
                Novo por aqui?
                <Link onClick={register}>Cadastre-se</Link>
              </span>
            </fieldset>
          </form>
        </section>

        {showAlertBox === true ? (
          <div className="alert-section">
            <PasswordRecoveryAlertBox handleShowAlertBox={setShowAlertBox} />
          </div>
        ) : null}
      </main>
    </>
  );
}
