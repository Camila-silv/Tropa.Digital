import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingContainer, DataContainer } from "../components/Index.jsx";

export default function Dashboard() {
  const [showLoading, setShowLoading] = useState(false);

  const navigate = useNavigate();

  const toGoOut = (e) => {
    e.preventDefault();

    setShowLoading(true);
    setTimeout(() => {
      navigate("/");
      setShowLoading(false);
    }, 2000);
  };

  return (
    <>
      {showLoading === true ? <LoadingContainer /> : null}
      <div className="panel-dashboard">
        <section className="sidebar-section">
          <div className="sidebar-section-container">
            <header className="sidebar-header">
              <button className="sidebar-header__menu">
                <div className="menu-hamburger"></div>
                <div className="menu-hamburger"></div>
                <div className="menu-hamburger"></div>
              </button>

              <div className="sidebar-header-container">
                <h1 className="sidebar-header-container__user-name">
                  Maria Helena S.
                </h1>
                <span className="sidebar-header-container__mail">
                  teste@tropadigital.com
                </span>
                <img
                  src="./public/Ellipse-33.png"
                  alt=""
                  className="sidebar-header-container__photo"
                />
              </div>
            </header>

            <div className="container-option-dashboard">
              <div className="container-option-dashboard__option">
                <img src="./public/layout-2.png" alt="" className="icon" />{" "}
                Dashboard
              </div>
            </div>

            <div className="container-options">
              <div className="options">
                <img src="./public/new-file.png" alt="" className="icon" />
                <span className="options__label">LoremIpsum</span>
              </div>
              <div className="options">
                <img src="./public/document.png" alt="" className="icon" />{" "}
                <span className="options__label">LoremIpsum</span>
              </div>
              <div className="options">
                <img src="./public/duplechat-1.png" alt="" className="icon" />{" "}
                <span className="options__label">LoremIpsum</span>
              </div>
            </div>

            <div className="profile-configuration-container">
              <img src="./public/circle-user.png" alt="" className="icon" />
              <span className="profile-configuration-container__label">
                LoremIpsum
              </span>
            </div>

            <Link
              to="/"
              className="sidebar-section-container__to-go-out"
              onClick={toGoOut}
            >
              <img src="./public/Group-9.png" alt="" className="icon--size" />
            </Link>
          </div>
        </section>

        <main className="control-panel-main-content">
          <header className="main-header">
            <div className="main-header-container">
              <div className="search-container">
                <span className="search-container__icon">
                  <img src="./public/search-1.png" alt="" />
                </span>
                <input
                  type="text"
                  placeholder="Pesquisar"
                  className="search-container__input-search"
                  maxLength={50}
                />
              </div>
              <span className="main-header-container__icon">
                <img src="./public/notification.png" alt="" />
              </span>
            </div>
          </header>

          <section className="dashboard-section">
            <div className="dashboard-section-container">
              <h2 className="dashboard-section-container__title">Dashboard</h2>

              <div className="data-container-and-statistics">
                <DataContainer src="./public/dados-1.png">
                  <div className="data-block-header-container">
                    <h3 className="data-block-header-container__title">
                      Primary Text
                    </h3>

                    <span className="data-block-header-container__number">5.978,37</span>
                    <h4 className="data-block-header-container__label">
                      Secondary text
                    </h4>
                  </div>
                </DataContainer>
                <DataContainer src="./public/dados-2.png">
                  <div className="data-block-header-container">
                    <h3 className="data-block-header-container__title">
                      Primary Text
                    </h3>
                    <h4 className="data-block-header-container__label">
                      Secondary text
                    </h4>
                  </div>
                </DataContainer>
                <DataContainer src="./public/dados-3.png">
                  <div className="data-block-header-container">
                    <h3 className="data-block-header-container__title">
                      Primary Text
                    </h3>
                    <h4 className="data-block-header-container__label">
                      Secondary text
                    </h4>
                  </div>
                </DataContainer>
              </div>

              <div className="data-dashboard">
                <header className="data-block-header">
                  <div className="data-block-header-container">
                    <h3 className="data-block-header-container__title data-block-header-container__title--size">
                      Primary Text
                    </h3>
                    <h4 className="data-block-header-container__label data-block-header-container__label--size">
                      Secondary text
                    </h4>
                  </div>

                  <span className="data-block-header__icon data-block-header__icon--size">
                    <img src="./public/Group-2275.png" alt="" />
                  </span>
                </header>

                <div className="data-dashboard-container"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
